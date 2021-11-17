import React from 'react';
import classes from './AuthorInfo.module.css'
import {Link} from "react-router-dom";
import UserVerifiedIcon from "../../../UI/icons/UserVerifiedIcon";

const AuthorInfo = ({authorLink, isHover, setIsHover, authorMeta}) => {
    return (
        <div className={classes.authorInfo}>
            <Link to={authorLink}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}>
                <h3 className={isHover ? `${classes.authorId} ${classes.underline}` : classes.authorId}>
                    {authorMeta.name}
                    {authorMeta.verified ? <UserVerifiedIcon cl={classes.verified}/> : ''}
                </h3>
            </Link>
            <Link to={authorLink}
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
            >
                <h4 className={classes.authorNickName}>{authorMeta.nickName}</h4>
            </Link>
        </div>
    );
};

export default AuthorInfo;