import React, { useEffect, useState } from 'react';
import API from '../services/api';
import SongCard from '../components/SongCard';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchSongs = async () => {
      try {
        const res = await API.get('/songs');
        if (isMounted) {
          setSongs(res.data);
        }
      } catch (err) {
        console.error('Error fetching songs:', err);
        if (isMounted) {
          setError('Failed to load songs');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchSongs();

    return () => {
      isMounted = false;  // cleanup flag to avoid state update if unmounted
    };
  }, []);

  if (loading) return <div>Loading songs...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="card-container">
      {songs.length === 0 ? (
        <p>No songs available.</p>
      ) : (
        songs.map((song) => <SongCard key={song._id} song={song} />)
      )}
    </div>
  );
};

export default Home;
