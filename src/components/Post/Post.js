import React, { useContext, useState } from 'react';
import classes from './Post.module.css';
import AuthorInfo from './Author/AuthorInfo';
import AuthorAvatar from './Author/AuthorAvatar';
import VideoMeta from './Video/VideoMeta';
import FollowButton from '../../UI/buttons/FollowButton';
import VideoMusic from './Video/VideoMusic';
import VideoContainer from './Video/VideoContainer';
import { MediaContext } from '../../store/contexts/MediaContext';

const Post = ({ post, id }) => {
  const [isHover, setIsHover] = useState(false);
  const authorLink = `@${post.authorMeta.name}`;
  const { isDesktopOrTablet, isMobile } = useContext(MediaContext);

  return (
    <div className={isMobile ? `${classes.postWrapper} ${classes.postWrapperMobile}` : classes.postWrapper}>
      {isDesktopOrTablet && (
        <AuthorAvatar avatar={post.authorMeta.avatar} authorLink={authorLink} setIsHover={setIsHover} />
      )}
      <div className={isMobile ? `${classes.postContent} ${classes.postContentMobile}` : classes.postContent}>
        <div className={isMobile ? classes.mobile : ''}>
          <AuthorInfo authorMeta={post.authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover} />
          <VideoMeta text={post.text} />
          {isDesktopOrTablet && (
            <div className={classes.followWrapper}>
              <FollowButton />
            </div>
          )}

          <VideoMusic musicMeta={post.musicMeta} />
        </div>

        <VideoContainer post={post} id={id} />
      </div>
    </div>
  );
};

export default Post;
