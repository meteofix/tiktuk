import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import AppRouter from './components/AppRouter';
import { MediaContext } from './store/contexts/MediaContext';

const App = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 769 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <MediaContext.Provider value={{ isDesktopOrTablet, isMobile }}>
      <BrowserRouter>
        <div className="App">
          <AppRouter />
        </div>
      </BrowserRouter>
    </MediaContext.Provider>
  );
};

export default App;
