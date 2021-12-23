import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import classes from './VideoCompact.module.css';
import CountRound from '../../../utils/countRound';
import playIcon from '../../../UI/icons/playIcon.svg';
import Loader from '../../../UI/icons/Loader/Loader';
import { MediaContext } from '../../../store/contexts/MediaContext';
import tiktok from '../../../UI/icons/tiktok.png';

const VideoCompact = ({ item }) => {
  const { isMobile } = useContext(MediaContext);
  const [noVideo, setNoVideo] = useState(false);
  const [noImage, setNoImage] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isBuffered, setIsBuffered] = useState(false);

  return (
    <div
      className={isMobile ? `${classes.videoFeedItem} ${classes.videoFeedItemMobile}` : classes.videoFeedItem}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={() => (isHover ? setIsHover(false) : setIsHover(true))}
    >
      {noImage ? (
        <img alt="Video not found" className={classes.videoPlayer} src={tiktok} />
      ) : noVideo ? (
        <img
          alt="Video cover"
          className={classes.videoPlayer}
          onError={() => setNoImage(true)}
          src={isHover ? item.video.dynamicCover : item.video.cover}
        />
      ) : (
        <ReactPlayer
          playing={isHover}
          className={classes.videoPlayer}
          url={item.video.downloadAddr}
          loop
          onBuffer={() => setIsBuffered(true)}
          onBufferEnd={() => setIsBuffered(false)}
          muted
          onError={() => setNoVideo(true)}
          width="100%"
          height="100%"
        />
      )}
      {isBuffered && (
        <div className={classes.buffered}>
          <Loader small />
        </div>
      )}
      <div className={classes.videoCardMask}>
        <img alt="alt" title="title" src={playIcon} />
        <strong className={classes.videoCount}>{CountRound({ count: item.stats.playCount })}</strong>
      </div>
    </div>
  );
};

export default VideoCompact;
