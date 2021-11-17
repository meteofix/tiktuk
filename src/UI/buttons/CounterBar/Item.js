import React from 'react';
import classes from "./Item.module.css";
import LikeIcon from "../../icons/CounterBar/LikeIcon";
import CommentIcon from "../../icons/CounterBar/CommentIcon";
import CountRound from "../../../utils/countRound";
import ShareIcon from "../../icons/CounterBar/ShareIcon";

const Item = ({count, type}) => {
    return (
            <div className={classes.barItemWrapper}>
                <div className={classes.barItemImg}>
                    {type==='like' && <LikeIcon/>}
                    {type==='comment' && <CommentIcon/>}
                    {type==='share' && <ShareIcon/>}
                </div>
                <strong className={classes.barItemText}>
                    {<CountRound count={count}/>}
                </strong>
            </div>
    );
};

export default Item;