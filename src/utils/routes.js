import TrendingFeed from "../pages/TrendingFeed";
import UserProfile from "../pages/UserProfile";
import {Navigate} from "react-router-dom";
import {TEST_API_ROUTE, TEST_CONTEXT_ROUTE, TRENDING_FEED_ROUTE} from "./consts";
import TestApi from "../pages/testApi";
import TestContext from "../pages/TestContext/testContext";

export const routes = [
    {
        path: TRENDING_FEED_ROUTE,
        Element: <TrendingFeed />
    },
    {
        path: '/@:id',
        Element: <UserProfile />
    },
    {
        path: '/*',
        Element: <Navigate to={TRENDING_FEED_ROUTE}/>
    },
    {
        path: TEST_API_ROUTE,
        Element: <TestApi/>
    },
    {
        path: TEST_CONTEXT_ROUTE,
        Element: <TestContext/>
    }
]