import React, {useContext} from 'react';
import classes from "./VideoMeta.module.css";
import './hashtags.css'
import {ParseHashtags} from "../../../utils/parseHashtags";
import {MediaContext} from "../../../store/contexts/MediaContext";

const VideoMeta = ({text}) => {
    const {isDesktopOrTablet, isMobile} = useContext(MediaContext);

    return (
        <div className={isMobile? classes.videoMeta + ' ' + classes.videoMetaMobile : classes.videoMeta}>
            <div dangerouslySetInnerHTML={{ __html: ParseHashtags(text) }} ></div>
        </div>
    );
};

export default VideoMeta;