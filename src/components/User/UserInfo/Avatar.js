import React from 'react';
import classes from "./Avatar.module.css";

const Avatar = ({nickname, avatar}) => {
    return (
        <div className={classes.imageWrap}>
            <span className={classes.tiktokAvatar}>
                <img alt={nickname + ' TikTuk'} src={avatar} />
            </span>
        </div>
    );
};

export default Avatar;