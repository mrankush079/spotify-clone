import React, { useEffect, useState } from 'react';
import API from '../services/api';
import PlaylistForm from '../components/PlaylistForm';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [userRes, playlistsRes] = await Promise.all([
        API.get('/auth/me'),
        API.get('/playlists')
      ]);
      setUser(userRes.data);
      setPlaylists(playlistsRes.data);
    } catch (err) {
      console.error('Dashboard fetch error', err);
      setError('Failed to load data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePlaylistCreated = (newPlaylist) => {
    // Add new playlist to list — immediate UI update
    setPlaylists(prev => [newPlaylist, ...prev]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="main-content">
      <h2>Welcome, {user?.username}</h2>
      {user?.role === 'admin' && <PlaylistForm onCreated={handlePlaylistCreated} />}
      <div className="card-container">
        {playlists.length === 0 
          ? <p>No playlists yet</p>
          : playlists.map((pl) => (
              <div key={pl._id} className="card">
                <p className="card-title">{pl.name}</p>
                <p className="card-info">{pl.description}</p>
              </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
