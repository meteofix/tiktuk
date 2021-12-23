import React, { useContext, useEffect, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { PlayerContext } from '../../../store/contexts/PlayerProvider';
import { setMuted, setPlayingId } from '../../../store/reducers/playerReducer';
import useVisibility from '../../../hooks/useVisibility';
import WindowFocusHandler from '../../../utils/windowFocusHandler';
import classes from './VideoContainer.module.css';
// import l from "../../../UI/icons/Loader/LoaderWrapper.module.css";
import PlayPauseButton from '../../../UI/buttons/PlayPauseButton';
import VolumeButton from '../../../UI/buttons/VolumeButton';
import Item from '../../../UI/buttons/CounterBar/Item';
import Loader from '../../../UI/icons/Loader/Loader';
import { MediaContext } from '../../../store/contexts/MediaContext';
import AuthorAvatar from '../Author/AuthorAvatar';
import tiktok from '../../../UI/icons/tiktok.png';

const VideoContainer = ({ post, id }) => {
  const { isMobile } = useContext(MediaContext);
  const [isVisible, currentElement] = useVisibility(200);
  const [isVideoHover, setIsVideoHover] = useState(!!isMobile);
  const [noVideo, setNoVideo] = useState(false);
  const [noImage, setNoImage] = useState(false);
  const [isBuffered, setIsBuffered] = useState(false);
  const { isMuted, playingId, dispatch } = useContext(PlayerContext);
  const authorLink = `@${post.authorMeta.name}`;

  const handlePlayPause = () => {
    if (playingId === id) dispatch(setPlayingId(''));
    else dispatch(setPlayingId(id));
  };
  const handleMuted = () => {
    if (isMuted) dispatch(setMuted(false));
    else dispatch(setMuted(true));
  };
  const onFocus = () => {
    if (isVisible) dispatch(setPlayingId(id));
  };
  const onBlur = () => {
    dispatch(setPlayingId(''));
  };

  useEffect(() => {
    if (isVisible) dispatch(setPlayingId(id));
  }, [isVisible]);

  return (
    <div
      className={isMobile ? `${classes.videoWrapper} ${classes.videoWrapperMobile}` : classes.videoWrapper}
      ref={currentElement}
    >
      <div
        className={classes.video}
        onMouseEnter={() => setIsVideoHover(true)}
        onMouseLeave={() => setIsVideoHover(false)}
      >
        <div className={classes.video} onClick={handlePlayPause}>
          {noImage ? (
            // <div className={l.loaderWrapper}>
            //     <Loader small/>
            // </div>
            <img alt="Video cover" className={classes.videoPlayer} src={tiktok} />
          ) : noVideo ? (
            <img
              alt="cover"
              className={classes.videoPlayer}
              onError={() => setNoImage(true)}
              src={isVideoHover ? post.covers.dynamic : post.covers.default}
            />
          ) : (
            <ReactPlayer
              playing={playingId === id}
              className={classes.videoPlayer}
              url={post.videoUrl}
              onBuffer={() => setIsBuffered(true)}
              onBufferEnd={() => setIsBuffered(false)}
              loop
              onError={() => setNoVideo(true)}
              muted={isMuted}
              width="100%"
              height="100%"
            />
          )}
        </div>
        {isBuffered && (
          <div className={classes.buffered}>
            <Loader small />
          </div>
        )}
        <span className={classes.styleLayerMask}> </span>
        <span style={noVideo ? { display: 'flex' } : { display: 'none' }} className={classes.error}>
          Video downloading error
        </span>
        <div className={isMobile ? `${classes.playBar} ${classes.playBarMobile}` : classes.playBar}>
          <PlayPauseButton id={id} playingId={playingId} handlePlayPause={handlePlayPause} isHover={isVideoHover} />
          <VolumeButton handleMuted={handleMuted} isMuted={isMuted} isHover={isVideoHover} />
        </div>
      </div>
      <div className={isMobile ? `${classes.counterBar} ${classes.counterBarMobile}` : classes.counterBar}>
        {isMobile && (
          <div className={classes.counterBarAvatar}>
            <AuthorAvatar avatar={post.authorMeta.avatar} authorLink={authorLink} />
          </div>
        )}
        <Item type="like" count={post.diggCount} />
        <Item type="comment" count={post.commentCount} />
        <Item type="share" count={post.shareCount} />
      </div>
      <WindowFocusHandler onFocus={onFocus} onBlur={onBlur} />
    </div>
  );
};

export default VideoContainer;
