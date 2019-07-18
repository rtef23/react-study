import React from "react";

import SearchBar from "./search/SearchBar";

const YOUTUBE_PRIVATE = require("../private/youtubeApi");

const App = () => {
    console.log(YOUTUBE_PRIVATE.key);
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

export default App;