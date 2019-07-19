import React, {useEffect, useState} from "react";

import SearchBar from "./search/SearchBar";
import VideoPlayer from "./video/VideoPlayer";
import VideoList from "./video/VideoList";
import axios from "axios";

const YOUTUBE_PRIVATE = require("../private/youtubeApi");
const YOUTUBE_PARAMETER = Object.assign({}, YOUTUBE_PRIVATE, {
    part: "id,player,snippet"
});

const App = () => {
    const [currentPlayVideo, setCurrentPlayVideo] = useState({});
    const [pageNo, setPageNo] = useState({
        pageNo: 1
    });
    const [pageOffset, setPageOffset] = useState({
        pageOffset: 10
    });
    const [videoList, setVideoList] = useState([]);

    useEffect(() => {
        getVideos().then((videoListResult) => {
            let videoList = videoListResult.items;

            setVideoList(videoList);
            setCurrentPlayVideo(videoList[0]);
        });
    }, [pageNo, pageOffset]);

    return (
        <div>
            <SearchBar/>
            <VideoPlayer videoInfo={currentPlayVideo}/>
            <VideoList videoList={videoList}/>
        </div>
    );
};

const getVideos = () => {
    return axios.get("https://www.googleapis.com/youtube/v3/videos", {
        params: YOUTUBE_PARAMETER
    }).then((response) => {
        return response.data;
    }).catch(() => {
        alert("fail to get videos");
    });
};

export default App;