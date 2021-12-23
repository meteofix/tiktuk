import React, { useContext } from 'react';
import classes from './Avatar.module.css';
import { MediaContext } from '../../../store/contexts/MediaContext';

const Avatar = ({ nickname, avatar }) => {
  const { isMobile } = useContext(MediaContext);
  return (
    <div className={classes.imageWrap}>
      <span className={isMobile ? `${classes.tiktokAvatar} ${classes.tiktokAvatarMobile}` : classes.tiktokAvatar}>
        <img alt={`${nickname} TikTuk`} src={avatar} />
      </span>
    </div>
  );
};

export default Avatar;
