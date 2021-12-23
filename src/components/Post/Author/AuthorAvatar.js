import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthorAvatar.module.css';
import { MediaContext } from '../../../store/contexts/MediaContext';
import followPlus from '../../../UI/icons/followPlus.svg';

const AuthorAvatar = ({ authorLink, avatar, setIsHover = () => false }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <Link
      to={authorLink}
      className={isMobile ? `${classes.postAvatar} ${classes.postAvatarMobile}` : classes.postAvatar}
    >
      <span
        className={classes.tiktokAvatar}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isMobile && (
          <div className={classes.plusIcon}>
            <img alt="Follow" src={followPlus} />
          </div>
        )}
        <img alt="Profile img" title="Profile image" src={avatar} />
      </span>
    </Link>
  );
};

export default AuthorAvatar;
