import React, {useEffect, useState} from 'react';
import Post from "../components/Post/Post";
import PlayerProvider from "../store/contexts/PlayerProvider";
import requestData from "../utils/requestData";
import {TRENDING_FEED_URL} from "../utils/consts";
import classes from './TrendingFeed.module.css'
import l from '../UI/icons/Loader/LoaderWrapper.module.css'
import Loader from "../UI/icons/Loader/Loader";

const TrendingFeed = () => {
    const [responseData, setResponseData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        requestData({
            url: TRENDING_FEED_URL,
            responseData,
            setResponseData,
            setIsLoading
        });
    }, [setResponseData])
    return (
        <PlayerProvider>
            {isLoading?
                <div className={l.loaderWrapper + ' ' + l.loaderHeight80}>
                    <Loader/>
                </div>
                :
                <div className={classes.feedWrapper}>
                    {responseData?.map((post, index) =>
                        <Post key={post.id} post={post} id={index}/>
                    )}
                </div>
            }
        </PlayerProvider>
    );
};

export default TrendingFeed;