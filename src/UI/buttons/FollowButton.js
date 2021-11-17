import React from 'react';
import classes from "./FollowButton.module.css";

const FollowButton = ({cl = ''}) => {
    return (
        <button className={classes.followButton + ' ' + cl}> Follow </button>
    );
};

export default FollowButton;