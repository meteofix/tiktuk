import React, { useContext } from 'react';
import classes from './UserTitleContainer.module.css';
import UserVerifiedIcon from '../../../UI/icons/UserVerifiedIcon';
import FollowButton from '../../../UI/buttons/FollowButton';
import { MediaContext } from '../../../store/contexts/MediaContext';

const UserTitleContainer = ({ uniqueId, verified, nickname }) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);
  return (
    <div
      className={
        isMobile ? `${classes.userTitleContainer} ${classes.userTitleContainerMobile}` : classes.userTitleContainer
      }
    >
      <h2 className={isMobile ? `${classes.userTitle} ${classes.userTitleMobile}` : classes.userTitle}>
        {isMobile && '@'}
        {uniqueId}
        {verified ? (
          <UserVerifiedIcon small cl={isMobile ? `${classes.verified} ${classes.verifiedMobile}` : classes.verified} />
        ) : (
          ''
        )}
      </h2>
      {isDesktopOrTablet && <h1 className={classes.userSubTitle}>{nickname}</h1>}
      {isDesktopOrTablet && (
        <div className={classes.userFollowContainer}>
          <FollowButton cl={classes.followButton} />
        </div>
      )}
    </div>
  );
};

export default UserTitleContainer;
