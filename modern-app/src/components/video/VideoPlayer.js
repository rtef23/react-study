import React from "react";

const VideoPlayer = ({videoInfo}) => {
    return (
        <div>
            <div>{videoInfo.id}</div>
            <div>{videoInfo.kind}</div>
            <div dangerouslySetInnerHTML={{__html: videoInfo.player ? videoInfo.player.embedHtml : "<span>test</span>"}}>
            </div>
        </div>
    );
};

// VideoPlayer.propTypes = {
//     videoInfo: PropTypes.shape({
//         id: PropTypes.string.isRequired,
//         player: PropTypes.shape({
//             embedHtml: PropTypes.string.isRequired
//         })
//     })
// };

export default VideoPlayer;