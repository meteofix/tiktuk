import React from 'react';
import classes from "./UserTitleContainer.module.css";
import UserVerifiedIcon from "../../../UI/icons/UserVerifiedIcon";
import FollowButton from "../../../UI/buttons/FollowButton";

const UserTitleContainer = ({uniqueId, verified, nickname}) => {
    return (
        <div className={classes.userTitleContainer}>
            <h2 className={classes.userTitle}>
                {uniqueId}
                {verified ? <UserVerifiedIcon cl={classes.verified}/> : ''}
            </h2>
            <h1 className={classes.userSubTitle}>{nickname}</h1>
            <div className={classes.userFollowContainer}>
                <FollowButton cl={classes.followButton}/>
            </div>
        </div>
    )
};

export default UserTitleContainer;