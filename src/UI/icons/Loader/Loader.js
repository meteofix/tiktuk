import React from 'react';
import classes from './Loader.module.css';

const Loader = ({ small = false }) => (
  <div className={small ? `${classes.loader} ${classes.loaderSmall}` : classes.loader} />
);

export default Loader;
