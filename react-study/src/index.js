import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Box from "./box/Box";
import AppStore from "./store/AppStore";

import {CreateElement, Element, EList, EStore} from "./crud/Element";

const App = () => {
    return (
        <div>
            <div className="app-header">
                <h2>This is App Component</h2>
            </div>
            <div className="app-body">
                <div>
                    <div className="test-header">
                        Box Test
                    </div>
                    <div className="test-body">
                        <Box content="RED" onClick={() => changeColorState("red")}/>
                        <Box content="BLUE" onClick={() => changeColorState("blue")}/>
                        <Box content="GREEN" onClick={() => changeColorState("green")}/>
                    </div>
                </div>
                <div>
                    <div className="test-header">CRUD Test</div>
                    <div className="test-body">
                        <CreateElement onClick={() => {
                            EStore.dispatch({
                                type: "CHANGE_MODE",
                                mode: "create"
                            });
                        }}/>
                        <EList/>
                    </div>
                    <div className="test-footer">
                        {_modeResolver()}
                    </div>
                </div>
            </div>
        </div>
    );
};

const _modeResolver = () => {
    if (EStore.getState().mode === "create") {
        return (<textarea></textarea>);
    } else {
        let currentState = EStore.getState();
        let selectedElement = currentState.contents.filter((content) => content.id === currentState.selectedId)[0];

        return (<Element title={selectedElement.title} content={selectedElement.content}/>);
    }
};

AppStore.subscribe(() => {
    ReactDOM.render(<App/>, document.getElementById("app"));
});

EStore.subscribe(() => {
    ReactDOM.render(<App/>, document.getElementById("app"));
});

const changeColorState = (color) => {
    AppStore.dispatch({
        type: "CHANGE_COLOR",
        color: color
    });
};

export default App;

ReactDOM.render(<App/>, document.getElementById("app"));