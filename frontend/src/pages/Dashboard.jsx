import React, { useEffect, useState } from 'react';
import API from '../services/api';
import PlaylistForm from '../components/PlaylistForm';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    API.get('/auth/me').then((res) => setUser(res.data));
    API.get('/playlists').then((res) => setPlaylists(res.data));
  }, []);

  return (
    <div className="main-content">
      <h2>Welcome, {user.username}</h2>
      {user.role === 'admin' && <PlaylistForm />}
      <div className="card-container">
        {playlists.map((pl) => (
          <div key={pl._id} className="card">
            <p className="Card-Title">{pl.name}</p>
            <p className="Card-Info">{pl.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;