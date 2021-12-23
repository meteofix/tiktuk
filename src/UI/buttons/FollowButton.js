import React from 'react';
import classes from './FollowButton.module.css';

const FollowButton = ({ cl = '' }) => (
  <button type="button" className={`${classes.followButton} ${cl}`}>
    {' '}
    Follow{' '}
  </button>
);

export default FollowButton;
