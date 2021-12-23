import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './UserHeader.module.css';
import Avatar from './UserInfo/Avatar';
import UserTitleContainer from './UserInfo/UserTitleContainer';
import Counter from './UserInfo/Counter';
import { MediaContext } from '../../store/contexts/MediaContext';
import FollowButton from '../../UI/buttons/FollowButton';
import fl from './UserInfo/UserTitleContainer.module.css';
import LeftNav from '../../UI/icons/leftNav';

const UserHeader = ({ userInfo }) => {
  const { isMobile } = useContext(MediaContext);
  const navigate = useNavigate();
  const { user, stats } = userInfo;
  const { link } = user.bioLink;

  return (
    <div className={isMobile ? `${classes.userHeader} ${classes.userHeaderMobile}` : classes.userHeader}>
      <div className={classes.userHead}>
        <div className={classes.userHeadLeft} onClick={() => navigate(-1)}>
          <LeftNav />
        </div>
        {isMobile && (
          <div className={classes.userHeadCenter}>
            <p>
              {' '}
              {user.nickname} | {user.uniqueId}{' '}
            </p>
          </div>
        )}
      </div>
      <div className={isMobile ? `${classes.userInfo} ${classes.userInfoMobile}` : classes.userInfo}>
        <Avatar nickname={user.nickname} avatar={user.avatarMedium} />
        <UserTitleContainer nickname={user.nickname} verified={user.verified} uniqueId={user.uniqueId} />
      </div>
      <div className={isMobile ? `${classes.countInfos} ${classes.countInfosMobile}` : classes.countInfos}>
        <Counter count={stats.followingCount} title="Following" />
        <Counter count={stats.followerCount} title="Followers" />
        <Counter count={stats.heartCount} title="Likes" />
      </div>
      {isMobile && (
        <div
          className={isMobile ? `${fl.userFollowContainer} ${fl.userFollowContainerMobile}` : fl.userFollowContainer}
        >
          <FollowButton cl={isMobile ? `${fl.followButton} ${fl.followButtonMobile}` : fl.followButton} />
        </div>
      )}
      {/* <div className={isMobile? classes.userDesc + ' ' + classes.userDescMobile : classes.userDesc} dangerouslySetInnerHTML={{ __html: ParseHashtags(userInfo.user.signature) }}></div> */}
      <div className={isMobile ? `${classes.userDesc} ${classes.userDescMobile}` : classes.userDesc}>
        {user.signature}
      </div>
      <div
        style={link ? {} : { display: 'none' }}
        className={isMobile ? `${classes.userLink} ${classes.userLinkMobile}` : classes.userLink}
      >
        <a target="blank" rel="nofollow noreferrer noopener" href={link}>
          {link.replace(/(^\w+:|^)\/\//, '')}
        </a>
      </div>
    </div>
  );
};

export default UserHeader;
