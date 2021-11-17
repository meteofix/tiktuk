import React from 'react';
import classes from "./VideoMeta.module.css";
import './hashtags.css'
import {ParseHashtags} from "../../../utils/parseHashtags";

const VideoMeta = ({text}) => {
    return (
        <div className={classes.videoMeta}>
            <div dangerouslySetInnerHTML={{ __html: ParseHashtags(text) }} ></div>
        </div>
    );
};

export default VideoMeta;