import React from "react";
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {TRENDING_FEED_ROUTE} from "./utils/consts";
import {MediaContext} from "./store/contexts/MediaContext";
import {useMediaQuery} from "react-responsive";

function App() {
    const isDesktopOrTablet = useMediaQuery({ minWidth: 769 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    return (
        <MediaContext.Provider value={{isDesktopOrTablet, isMobile}}>
            <BrowserRouter>
                <div className="App">
                    {/*<Link style={{height: '44px', }} to={TRENDING_FEED_ROUTE}>TikTuk</Link>*/}
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </MediaContext.Provider>
  );
}

export default App;
