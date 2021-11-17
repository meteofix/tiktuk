import React from 'react';
import classes from './VideoMusic.module.css'
import MusicIcon from "../../../UI/icons/MusicIcon";

const VideoMusic = ({musicMeta}) => {
    return (
        <div className={classes.musicInfo}>
            <h4>
                <a>
                    <div className={classes.musicInfoText}>
                        <MusicIcon/>
                        {musicMeta.musicName + ' - ' + musicMeta.musicAuthor}
                    </div>
                </a>
            </h4>
        </div>
    );
};

export default VideoMusic;