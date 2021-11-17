import React, {useState} from 'react';
import classes from './UserMain.module.css'
import VideoCompact from "./UserFeed/VideoCompact";
import LikesLockedPage from "./UserFeed/LikesLockedPage";
import LockedIcon from "../../UI/icons/LockedIcon";
import userFeed from '../../json/user-feed.json'

const UserMain = ({user}) => {
    const [activeTab, setActiveTab] = useState(true);
    const [hoverTab, setHoverTab] = useState(true);

    return (
        <div className={classes.userMain}>
            <div className={classes.videoFeedTab}>
                <p className={activeTab?classes.active:''}
                   onClick={() => setActiveTab(true)}
                   onMouseEnter={() => setHoverTab(true)}
                   onMouseLeave={() => setHoverTab(activeTab)}
                >
                    <span>Videos</span>
                </p>
                <p className={!activeTab?classes.active:''}
                   onClick={() => setActiveTab(false)}
                   onMouseEnter={() => setHoverTab(false)}
                   onMouseLeave={() => setHoverTab(activeTab)}
                >
                    <LockedIcon/>
                    <span>Liked</span>
                </p>
                <div style={hoverTab?{transform: 'translateX(0px)'}:{transform: 'translateX(297px)'}} className={classes.bottomLine}></div>
            </div>
            {activeTab?
                <div className={classes.videoFeed}>
                    {userFeed.itemList.map((item, index) =>
                        <VideoCompact key={item.id} item={item}/>
                    )}
                </div>
                :
                <LikesLockedPage user={user}/>
            }
        </div>
    );
};

export default UserMain;