import React from "react";

import PropTypes from "prop-types";

const VideoList = ({videoList}) => {
    const style = {
        width: "300px",
        height: "500px",
        backgroundColor: "grey",
        overflowY: "scroll"
    };

    return (
        <ul className="video-list" style={style}>
            {videoList.map(renderVideo)}
        </ul>
    );
};

const renderVideo = ({id, snippet}) => {
    const style = {
        height: "50px",
        backgroundColor: "white"
    };

    return (
        <li key={id} style={style}><img src={snippet.thumbnails.default.url} />{snippet.title}</li>
    );
};

VideoList.propTypes = {
    videoList: PropTypes.array.isRequired
};

export default VideoList;