import React, { useContext, useState } from 'react';
import classes from './UserMain.module.css';
import VideoCompact from './UserFeed/VideoCompact';
import LikesLockedPage from './UserFeed/LikesLockedPage';
import LockedIcon from '../../UI/icons/LockedIcon';
import userFeed from '../../json/user-feed.json';
import { MediaContext } from '../../store/contexts/MediaContext';
import LikedIcon from '../../UI/icons/LikedIcon';
import VideosIcon from '../../UI/icons/VideosIcon';

const UserMain = ({ user }) => {
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);
  const [activeTab, setActiveTab] = useState(true);
  const [hoverTab, setHoverTab] = useState(true);

  return (
    <div className={isMobile ? `${classes.userMain} ${classes.userMainMobile}` : classes.userMain}>
      <div className={isMobile ? `${classes.videoFeedTab} ${classes.videoFeedTabMobile}` : classes.videoFeedTab}>
        <p
          className={activeTab ? classes.active : ''}
          onClick={() => setActiveTab(true)}
          onMouseEnter={() => setHoverTab(true)}
          onMouseLeave={() => setHoverTab(activeTab)}
        >
          {isDesktopOrTablet && <span>Videos</span>}
          {isMobile && <VideosIcon />}
        </p>
        <p
          className={!activeTab ? classes.active : ''}
          onClick={() => setActiveTab(false)}
          onMouseEnter={() => setHoverTab(false)}
          onMouseLeave={() => setHoverTab(activeTab)}
        >
          {isDesktopOrTablet && <LockedIcon />}
          {isDesktopOrTablet && <span>Liked</span>}
          {isMobile && <LikedIcon />}
        </p>
        {isDesktopOrTablet && (
          <div
            style={hoverTab ? { transform: 'translateX(0px)' } : { transform: 'translateX(297px)' }}
            className={isMobile ? `${classes.bottomLine} ${classes.bottomLineMobile}` : classes.bottomLine}
          >
            {' '}
          </div>
        )}
      </div>
      {activeTab ? (
        <div className={classes.videoFeed}>
          {userFeed.itemList.map((item) => (
            <VideoCompact key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <LikesLockedPage user={user} />
      )}
    </div>
  );
};

export default UserMain;
