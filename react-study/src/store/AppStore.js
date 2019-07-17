import React from "react";
import {createStore} from "redux";

const reducer = (prevState, action) => {
    console.log(`prev state : ${JSON.stringify(prevState)}`);
    console.log(`action : ${JSON.stringify(action)}`);

    if (prevState === undefined) {
        //initialize state in store
        return {
            color: "yellow"
        };
    }

    let newState;

    if (action.type === "CHANGE_COLOR") {
        newState = Object.assign({}, prevState, {color: action.color});
    }

    return newState;
};

const AppStore = createStore(reducer
    // , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default AppStore;