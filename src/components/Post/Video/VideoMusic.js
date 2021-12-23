import React, { useContext } from 'react';
import classes from './VideoMusic.module.css';
import MusicIcon from '../../../UI/icons/MusicIcon';
import { MediaContext } from '../../../store/contexts/MediaContext';

const VideoMusic = ({ musicMeta }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <div className={isMobile ? `${classes.musicInfo} ${classes.musicInfoMobile}` : classes.musicInfo}>
      <MusicIcon />
      <div className={classes.play}>
        <h4>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a>
            <div
              className={isMobile ? `${classes.musicInfoText} ${classes.musicInfoTextMobile}` : classes.musicInfoText}
            >
              {`${musicMeta.musicName} - ${musicMeta.musicAuthor}`}
            </div>
          </a>
        </h4>
      </div>
    </div>
  );
};

export default VideoMusic;
