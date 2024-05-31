import React, { lazy } from 'react';

const Listings = lazy(() => import('./pages/Dashboard/Listings'));
const DashboardContainer = lazy(() => import('./pages/Dashboard/DashboardContainer'));
const Hero = lazy(() => import('./pages/Hero'));
const Container = lazy(() => import('./pages/Container'));

export {Listings, DashboardContainer, Hero, Container };
