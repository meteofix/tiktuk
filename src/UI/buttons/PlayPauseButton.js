import React, { useContext } from 'react';
import classes from './PlayPauseButton.module.css';
import { MediaContext } from '../../store/contexts/MediaContext';

const PlayPauseButton = ({ playingId, id, handlePlayPause, isHover }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <div
      className={isMobile ? `${classes.playPauseButton} ${classes.playPauseButtonMobile}` : classes.playPauseButton}
      style={isHover ? { display: 'block' } : { display: 'none' }}
      onClick={handlePlayPause}
    >
      {playingId === id ? (
        <svg width="20" height="20" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 6C8 5.44771 8.44772 5 9 5H17C17.5523 5 18 5.44772 18 6V42C18 42.5523 17.5523 43 17 43H9C8.44772 43 8 42.5523 8 42V6Z" />
          <path d="M30 6C30 5.44771 30.4477 5 31 5H39C39.5523 5 40 5.44772 40 6V42C40 42.5523 39.5523 43 39 43H31C30.4477 43 30 42.5523 30 42V6Z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 48 48" fill="#fff" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z"
          />
        </svg>
      )}
    </div>
  );
};

export default PlayPauseButton;
