import React from 'react';
import {Link} from "react-router-dom";
import classes from "./AuthorAvatar.module.css";

const AuthorAvatar = ({authorLink, avatar, setIsHover}) => {
    return (
        <Link to={authorLink} className={classes.postAvatar}>
                <span className={classes.tiktokAvatar}
                      onMouseEnter={() => setIsHover(true)}
                      onMouseLeave={() => setIsHover(false)}
                >
                    <img alt='Profile image' title='Profile image' src={avatar}/>
                </span>
        </Link>
    );
};

export default AuthorAvatar;