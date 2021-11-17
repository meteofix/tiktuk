import React from 'react';
import classes from './UserHeader.module.css'
import Avatar from "./UserInfo/Avatar";
import UserTitleContainer from "./UserInfo/UserTitleContainer";
import Counter from "./UserInfo/Counter";
import {ParseHashtags} from "../../utils/parseHashtags";

const UserHeader = ({userInfo}) => {
    return (
        <div className={classes.userHeader}>
            <div className={classes.userInfo}>
                <Avatar
                    nickname={userInfo.user.nickname}
                    avatar={userInfo.user.avatarMedium}
                />
                <UserTitleContainer
                    nickname={userInfo.user.nickname}
                    verified={userInfo.user.verified}
                    uniqueId={userInfo.user.uniqueId}
                />
            </div>
            <div className={classes.countInfos}>
                <Counter count={userInfo.stats.followingCount} title='Following'/>
                <Counter count={userInfo.stats.followerCount} title='Followers'/>
                <Counter count={userInfo.stats.heartCount} title='Likes'/>
            </div>
            <div className={classes.userDesc} dangerouslySetInnerHTML={{ __html: ParseHashtags(userInfo.user.signature) }}></div>
            <div style={userInfo.user.bioLink?.link?{}:{display: 'none'}} className={classes.userLink}>
                <a target="blank"
                   rel="noindex nofollow noreferrer noopener"
                   href={userInfo.user.bioLink?.link}
                >
                    {userInfo.user.bioLink?.link.replace(/(^\w+:|^)\/\//, '')}
                </a>
            </div>
        </div>
    );
};

export default UserHeader;