import React from "react";
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {TRENDING_FEED_ROUTE} from "./utils/consts";

function App() {
    return (
      <BrowserRouter>
          <div className="App">
              <Link to={TRENDING_FEED_ROUTE}>TikTuk</Link>
              <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
