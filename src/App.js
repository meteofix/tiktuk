import React from "react";
import './App.css';
import {BrowserRouter, Link} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {TEST_API_ROUTE, TEST_CONTEXT_ROUTE, TRENDING_FEED_ROUTE} from "./utils/consts";

function App() {
    return (
      <BrowserRouter>
          <div className="App">
              <Link to={TRENDING_FEED_ROUTE}>TikTuk</Link>
              <Link to={TEST_API_ROUTE}>TestAPI</Link>
              <Link to={TEST_CONTEXT_ROUTE}>TestContext</Link>
              <AppRouter/>
          </div>
      </BrowserRouter>
  );
}

export default App;
