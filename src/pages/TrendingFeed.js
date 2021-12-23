import React, { useContext, useEffect, useState } from 'react';
import Post from '../components/Post/Post';
import PlayerProvider from '../store/contexts/PlayerProvider';
import requestData from '../utils/requestData';
import { TRENDING_FEED_URL } from '../utils/consts';
import classes from './TrendingFeed.module.css';
import l from '../UI/icons/Loader/LoaderWrapper.module.css';
import Loader from '../UI/icons/Loader/Loader';
import { MediaContext } from '../store/contexts/MediaContext';

const TrendingFeed = () => {
  const [responseData, setResponseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { isMobile } = useContext(MediaContext);

  useEffect(() => {
    setIsLoading(true);
    requestData({
      url: TRENDING_FEED_URL,
      responseData,
      setResponseData,
      setIsLoading,
    });
  }, [setResponseData]);
  return (
    <PlayerProvider>
      <div className={isMobile ? `${classes.feedWrapper} ${classes.feedWrapperMobile}` : classes.feedWrapper}>
        {isLoading ? (
          <div
            className={
              isMobile
                ? `${l.loaderWrapper} ${l.loaderHeight80} ${l.loaderWrapperMobile}`
                : `${l.loaderWrapper} ${l.loaderHeight80}`
            }
          >
            <Loader />
          </div>
        ) : (
          <>
            {responseData?.map((post, index) => (
              <Post key={post.id} post={post} id={index} />
            ))}
          </>
        )}
      </div>
    </PlayerProvider>
  );
};

export default TrendingFeed;
