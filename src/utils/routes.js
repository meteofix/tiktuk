import React from 'react';
import { Navigate } from 'react-router-dom';
import TrendingFeed from '../pages/TrendingFeed';
import UserProfile from '../pages/UserProfile';
import { TRENDING_FEED_ROUTE } from './consts';

export const routes = [
  {
    path: TRENDING_FEED_ROUTE,
    Element: <TrendingFeed />,
  },
  {
    path: '/@:id',
    Element: <UserProfile />,
  },
  {
    path: '/*',
    Element: <Navigate to={TRENDING_FEED_ROUTE} />,
  },
];
