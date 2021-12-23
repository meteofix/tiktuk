import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthorInfo.module.css';
import UserVerifiedIcon from '../../../UI/icons/UserVerifiedIcon';
import { MediaContext } from '../../../store/contexts/MediaContext';

const AuthorInfo = ({ authorLink, isHover, setIsHover, authorMeta }) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);

  return (
    <div className={isMobile ? `${classes.authorInfo} ${classes.authorInfoMobile}` : classes.authorInfo}>
      <Link to={authorLink} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
        <h3 className={isHover ? `${classes.authorId} ${classes.underline}` : classes.authorId}>
          {isMobile && '@'}
          {authorMeta.name}
          {authorMeta.verified ? <UserVerifiedIcon cl={classes.verified} /> : ''}
        </h3>
      </Link>
      {isDesktopOrTablet && (
        <Link to={authorLink} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
          <h4 className={classes.authorNickName}>{authorMeta.nickName}</h4>
        </Link>
      )}
    </div>
  );
};

export default AuthorInfo;
