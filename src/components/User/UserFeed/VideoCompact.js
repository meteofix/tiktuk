import React, {useState} from 'react';
import ReactPlayer from "react-player";
import l from '../../../UI/icons/Loader/LoaderWrapper.module.css'
import classes from './VideoCompact.module.css'
import CountRound from "../../../utils/countRound";
import playIcon from '../../../UI/icons/playIcon.svg'
import Loader from "../../../UI/icons/Loader/Loader";

const VideoCompact = ({item}) => {
    const [noVideo, setNoVideo] = useState(false);
    const [noImage, setNoImage] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isBuffered, setIsBuffered] = useState(false);

    return (
        <div className={classes.videoFeedItem}
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
        >
            {noImage?
                <div className={l.loaderWrapper}>
                    <Loader small/>
                </div>
                :
                noVideo?
                    <img className={classes.videoPlayer}
                         onError={() => setNoImage(true)}
                         src={isHover?item.video.dynamicCover:item.video.cover}
                    />
                    :
                    <ReactPlayer
                        playing={isHover}
                        className={classes.videoPlayer}
                        url={item.video.downloadAddr}
                        loop={true}
                        onBuffer={() => setIsBuffered(true)}
                        onBufferEnd={() => setIsBuffered(false)}
                        muted={true}
                        onError={() => setNoVideo(true)}
                        width='100%'
                        height='100%'
                    />
            }
            {isBuffered&&
            <div className={classes.buffered}>
                <Loader small/>
            </div>}
            <div className={classes.videoCardMask}>
                <img alt='alt' title='title' src={playIcon}/>
                <strong className={classes.videoCount}>
                    {CountRound({count: item.stats.playCount})}
                </strong>
            </div>
        </div>
    );
};

export default VideoCompact;