import React, {useContext} from 'react';
import classes from './UserHeader.module.css'
import Avatar from "./UserInfo/Avatar";
import UserTitleContainer from "./UserInfo/UserTitleContainer";
import Counter from "./UserInfo/Counter";
import {ParseHashtags} from "../../utils/parseHashtags";
import {MediaContext} from "../../store/contexts/MediaContext";
import FollowButton from "../../UI/buttons/FollowButton";
import fl from './UserInfo/UserTitleContainer.module.css'
import LeftNav from "../../UI/icons/leftNav";
import {useNavigate} from "react-router-dom";

const UserHeader = ({userInfo}) => {
    const {isDesktopOrTablet, isMobile} = useContext(MediaContext);
    const navigate = useNavigate();

    return (
        <div className={isMobile? classes.userHeader + ' ' + classes.userHeaderMobile : classes.userHeader}>
            <div className={classes.userHead}>
                <div className={classes.userHeadLeft}
                     onClick={() => navigate(-1)}
                >
                    <LeftNav/>
                </div>
                {isMobile &&
                <div className={classes.userHeadCenter}>
                    <p> {userInfo.user.nickname} | {userInfo.user.uniqueId} </p>
                </div>
                }

            </div>
            <div className={isMobile? classes.userInfo + ' ' + classes.userInfoMobile : classes.userInfo}>
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
            <div className={isMobile? classes.countInfos + ' ' + classes.countInfosMobile : classes.countInfos}>
                <Counter count={userInfo.stats.followingCount} title='Following'/>
                <Counter count={userInfo.stats.followerCount} title='Followers'/>
                <Counter count={userInfo.stats.heartCount} title='Likes'/>
            </div>
            {isMobile &&
            <div className={isMobile? fl.userFollowContainer + ' ' + fl.userFollowContainerMobile : fl.userFollowContainer}>
                <FollowButton cl={isMobile? fl.followButton + ' ' + fl.followButtonMobile : fl.followButton}/>
            </div>
            }
            {/*<div className={isMobile? classes.userDesc + ' ' + classes.userDescMobile : classes.userDesc} dangerouslySetInnerHTML={{ __html: ParseHashtags(userInfo.user.signature) }}></div>*/}
            <div className={isMobile? classes.userDesc + ' ' + classes.userDescMobile : classes.userDesc}>
                {userInfo.user.signature}
            </div>
            <div style={userInfo.user.bioLink?.link?{}:{display: 'none'}} 
                 className={isMobile? classes.userLink + ' ' + classes.userLinkMobile : classes.userLink}>
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