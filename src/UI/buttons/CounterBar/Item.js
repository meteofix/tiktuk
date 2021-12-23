import React, { useContext } from 'react';
import classes from './Item.module.css';
import LikeIcon from '../../icons/CounterBar/LikeIcon';
import CommentIcon from '../../icons/CounterBar/CommentIcon';
import CountRound from '../../../utils/countRound';
import ShareIcon from '../../icons/CounterBar/ShareIcon';
import { MediaContext } from '../../../store/contexts/MediaContext';

const Item = ({ count, type }) => {
  const { isMobile } = useContext(MediaContext);

  return (
    <div className={classes.barItemWrapper}>
      <div className={isMobile ? `${classes.barItemImg} ${classes.barItemImgMobile}` : classes.barItemImg}>
        {type === 'like' && <LikeIcon />}
        {type === 'comment' && <CommentIcon />}
        {type === 'share' && <ShareIcon />}
      </div>
      <strong className={isMobile ? `${classes.barItemText} ${classes.barItemTextMobile}` : classes.barItemText}>
        <CountRound count={count} />
      </strong>
    </div>
  );
};

export default Item;
