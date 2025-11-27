// src/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';

const Layout = () => {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-content-wrapper">
        <div className="main-content">
          <Outlet />
        </div>
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Layout;
