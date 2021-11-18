import React, {useContext, useState} from 'react';
import ReactPlayer from "react-player";
import l from '../../../UI/icons/Loader/LoaderWrapper.module.css'
import classes from './VideoCompact.module.css'
import CountRound from "../../../utils/countRound";
import playIcon from '../../../UI/icons/playIcon.svg'
import Loader from "../../../UI/icons/Loader/Loader";
import {MediaContext} from "../../../store/contexts/MediaContext";
import tiktok from '../../../UI/icons/tiktok.png'

const VideoCompact = ({item}) => {
    const {isDesktopOrTablet, isMobile} = useContext(MediaContext);
    const [noVideo, setNoVideo] = useState(false);
    const [noImage, setNoImage] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [isBuffered, setIsBuffered] = useState(false);

    return (
        <div className={isMobile? classes.videoFeedItem + ' ' + classes.videoFeedItemMobile : classes.videoFeedItem}
             onMouseEnter={() => setIsHover(true)}
             onMouseLeave={() => setIsHover(false)}
             onClick={() => isHover? setIsHover(false) : setIsHover(true)}
        >
            {noImage?
                // <div className={l.loaderWrapper}>
                //     <Loader small/>
                // </div>
                <img className={classes.videoPlayer}
                     src={ tiktok }
                />
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
                        // url={'https://v39-eu.tiktokcdn.com/234fd74b1b6001d753afa8be4bf09b87/6195eb58/video/tos/alisg/tos-alisg-pve-0037c001/449c8bd66c7941a5ba06ef064081e855/?a=1233&br=3502&bt=1751&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=wZ~R_F5qkag3-I&l=202111172357340101901871630F3490E7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amttNjU6ZjtmNzMzODczNEApNDhoOTozNWU2NzdkM2Y0ZGdtcTBxcjRvY3JgLS1kMS1zcy5iNDJfMTU2NDMyXjYvNTI6Yw%3D%3D&vl=&vr='}
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