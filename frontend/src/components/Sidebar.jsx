// components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // <-- STEP 1: Import Link

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="nav">
        <div className="nav-option" style={{ opacity: 1 }}>
          <i className="fa-solid fa-house"></i>
          {/* STEP 2: Use Link for Home, pointing to root path "/" */}
          <Link to="/">Home</Link> 
        </div>
        <div className="nav-option">
          <i className="fa-solid fa-magnifying-glass"></i>
          {/* Use Link for Search, pointing to "/search" (assuming this route exists) */}
          <Link to="/search">Search</Link> 
        </div>
      </div>

      <div className="library">
        <div className="options">
          <div className="lib-option nav-option">
            <img src="/assets/library_icon.png" alt="Library" />
            {/* *** FIX HERE ***: Use Link for Your Library, pointing to "/dashboard" */}
            <Link to="/dashboard">Your Library</Link>
          </div>
          <div className="icons">
            <i className="fa-solid fa-plus"></i>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        <div className="lib-box">
          <div className="box">
            <p className="box-p1">Create Your First Playlist</p>
            <p className="box-p2">It's easy, we'll help you</p>
            {/* You should use Link here too if 'Create Playlist' is a route */}
            <Link to="/create-playlist" className="badge">Create Playlist</Link>
          </div>
          <div className="box">
            <p className="box-p1">Find Podcasts to Follow</p>
            <p className="box-p2">We'll keep you updated</p>
            {/* You should use Link here too if 'Browse Podcasts' is a route */}
            <Link to="/browse-podcasts" className="badge">Browse Podcasts</Link> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;