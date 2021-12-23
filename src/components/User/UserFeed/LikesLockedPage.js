import React from 'react';
import classes from './LikesLockedPage.module.css';
import lockIcon from '../../../UI/icons/lockIcon.svg';

const LikesLockedPage = ({ user }) => (
  <div className={classes.lockedPage}>
    <img alt="lockIcon" src={lockIcon} />
    <p className={classes.title}>This user`s liked videos are private</p>
    <p className={classes.desc}>Videos liked by {user} are currently hidden</p>
  </div>
);

export default LikesLockedPage;
