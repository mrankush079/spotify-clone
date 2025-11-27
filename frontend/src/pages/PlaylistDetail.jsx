import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api';

const PlaylistDetail = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    API.get(`/playlists/${id}`).then((res) => setPlaylist(res.data));
  }, [id]);

  if (!playlist) return <p>Loading...</p>;

  return (
    <div className="main-content">
      <h2>{playlist.name}</h2>
      <p>{playlist.description}</p>
      <div className="card-container">
        {playlist.songs.map((song) => (
          <div key={song._id} className="card">
            <img src={song.coverUrl} alt={song.title} className="card-img" />
            <p className="Card-Title">{song.title}</p>
            <p className="Card-Info">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistDetail;