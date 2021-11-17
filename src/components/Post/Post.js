import React, {useState} from 'react';
import classes from './Post.module.css';
import AuthorInfo from "./Author/AuthorInfo";
import AuthorAvatar from "./Author/AuthorAvatar";
import VideoMeta from "./Video/VideoMeta";
import FollowButton from "../../UI/buttons/FollowButton";
import VideoMusic from "./Video/VideoMusic";
import VideoContainer from "./Video/VideoContainer";

const Post = ({post, id}) => {
    const [isHover, setIsHover] = useState(false);
    const authorLink = '@' + post.authorMeta.name;

    return (
        <div className={classes.postWrapper}>
            <AuthorAvatar avatar={post.authorMeta.avatar} authorLink={authorLink} setIsHover={setIsHover}/>
            <div className={classes.postContent}>
                <AuthorInfo authorMeta={post.authorMeta} authorLink={authorLink} isHover={isHover} setIsHover={setIsHover}/>
                <VideoMeta text={post.text} />
                <div className={classes.followWrapper}>
                    <FollowButton/>
                </div>
                <VideoMusic musicMeta={post.musicMeta}/>
                <VideoContainer post={post} id={id}/>
            </div>
        </div>
    );
};

export default Post;