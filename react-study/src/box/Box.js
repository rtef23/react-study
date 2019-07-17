import React from "react";
import PropTypes from "prop-types";
import AppStore from "../store/AppStore";
import "./Box.css";

const Box = ({content, onClick}) => {
    let currentState = AppStore.getState();
    let style = {
        backgroundColor: currentState.color
    };

    return (
        <div className="box-container" style={style}>
            <div>{content}</div>
            <div><button onClick={onClick}>click</button></div>
        </div>
    );
};

Box.propTypes = {
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

// AppStore.subscribe(() => Box("test"));

export default Box;