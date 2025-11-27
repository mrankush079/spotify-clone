import { useEffect, useState } from 'react';
import API from '../services/api';
import SongCard from '../components/SongCard';

const Home = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    API.get('/songs').then((res) => setSongs(res.data));
  }, []);

  return (
    <div className="card-container">
      {songs.map((song) => (
        <SongCard key={song._id} song={song} />
      ))}
    </div>
  );
};

export default Home;