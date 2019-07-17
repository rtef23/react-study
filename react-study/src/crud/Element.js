import React from "react";
import PropTypes from "prop-types";
import {createStore} from "redux";

const reducer = (prevState, action) => {
    if (prevState === undefined) {
        //initialize
        return {
            mode: "create",
            contents: [{
                id: 1,
                title: "test-title-1",
                content: "test content 1"
            }, {
                id: 2,
                title: "test-title-2",
                content: "test content 2"
            }]
        };
    }

    let newState = {};

    switch (action.type) {
        case "PICK_ELEMENT" :
            Object.assign(newState, prevState, {selectedId: action.selectedId});
            break;
        case "CHANGE_MODE":
            Object.assign(newState, prevState, {mode: action.mode});
            break;
    }

    return newState;
};

const EStore = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Element = ({title, content}) => {
    return (
        <div>
            <input type="text" className="elem-title" value={title} onChange={() => {
            }}/>
            <input type="text" className="elem-content" value={content} onChange={() => {
            }}/>
        </div>
    );
};

Element.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

const EList = () => {
    let elementList = EStore.getState().contents;

    return (
        <ol>
            {_renderElementList(elementList, (elementId) => {
                EStore.dispatch({
                    type: "CHANGE_MODE",
                    mode: "read"
                });
                EStore.dispatch({
                    type: "PICK_ELEMENT",
                    selectedId: elementId
                });
            })}
        </ol>
    );
};

const _renderElementList = (elementList, onClick) => {
    return elementList.map((element) => {
        return (
            <li key={element.id}>
                <button onClick={() => onClick(element.id)}>{element.title}</button>
            </li>
        );
    });
};

const CreateElement = ({onClick}) => {
    return (
        <button onClick={onClick}>CREATE</button>
    );
}

CreateElement.propTypes = {
    onClick: PropTypes.func.isRequired
};

export {
    Element,
    EList,
    CreateElement,
    EStore
};