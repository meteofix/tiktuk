import React from 'react';
import classes from "./Counter.module.css";
import CountRound from "../../../utils/countRound";

const Counter = ({title, count}) => {
    return (
        <div className={classes.number}>
            <strong title={title}>{CountRound({count})}</strong>
            <span className={classes.unit}>{title}</span>
        </div>
    );
};

export default Counter;