import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import UserHeader from "../components/User/UserHeader";
import UserMain from "../components/User/UserMain";
import requestData from "../utils/requestData";
import { USER_INFO_URL} from "../utils/consts";
import classes from './UserProfile.module.css'
import l from '../UI/icons/Loader/LoaderWrapper.module.css'
import Loader from "../UI/icons/Loader/Loader";

const UserProfile = () => {
    const location = useLocation();
    const user = location.pathname.slice(2);
    const [userInfo, setUserInfo] = useState([])
    const [isInfoLoading, setIsInfoLoading] = useState(false)

    useEffect(() => {
        setIsInfoLoading(true);
        requestData({
            url: USER_INFO_URL,
            name: user,
            responseData: userInfo,
            setResponseData: setUserInfo,
            setIsLoading: setIsInfoLoading
        });
    }, [setUserInfo])


    /** For broken UserFeed API start **/
    // const [userFeed, setUserFeed] = useState([])
    // const [isFeedLoading, setIsFeedLoading] = useState(false)
    // useEffect(() => {
    //     setIsInfoLoading(true);
    //     requestData({
    //         url: USER_FEED_URL,
    //         name: user,
    //         responseData: userFeed,
    //         setResponseData: setUserFeed,
    //         setIsLoading: setIsFeedLoading
    //     });
    // }, [setUserFeed])
    /** For broken UserFeed API start **/


    return (
        <div className={classes.userLayout}>
            <div className={classes.userLayoutContent}>
                {isInfoLoading ?
                    <div className={l.loaderWrapper + ' ' + l.loaderHeight60}>
                        <Loader/>
                    </div>
                    :
                    !userInfo || userInfo.length === 0 || !userInfo.user.uniqueId ?
                        <p>Error</p>
                        :
                        <UserHeader userInfo={userInfo}/>
                }
                {isInfoLoading? '' :
                    !userInfo || userInfo.length === 0 || !userInfo.user.uniqueId ?
                        <p>Error</p>
                        :
                        <UserMain user={user}/>
                }
            </div>
        </div>
    );
};

export default UserProfile;