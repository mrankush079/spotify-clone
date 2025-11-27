import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import API from '../services/api';

const PlaylistDetail = () => {
  const { id } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;
    const fetchPlaylist = async () => {
      try {
        const res = await API.get(`/playlists/${id}`);
        if (isMounted) {
          setPlaylist(res.data);
        }
      } catch (err) {
        console.error('Error fetching playlist:', err);
        if (isMounted) {
          setError('Could not load playlist.');
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchPlaylist();

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) return <p>Loading playlist...</p>;
  if (error) return <p>{error}</p>;
  if (!playlist) return <p>No playlist data.</p>;

  const songs = Array.isArray(playlist.songs) ? playlist.songs : [];

  return (
    <div className="main-content">
      <h2>{playlist.name || 'Untitled Playlist'}</h2>
      <p>{playlist.description || ''}</p>

      {songs.length === 0 ? (
        <p>This playlist has no songs yet.</p>
      ) : (
        <div className="card-container">
          {songs.map((song) => (
            <div key={song._id} className="card">
              <img
                src={song.coverUrl || '/assets/default-cover.jpg'}
                alt={song.title || 'Song cover'}
                className="card-img"
              />
              <p className="card-title">{song.title || 'Unknown Title'}</p>
              <p className="card-info">{song.artist || 'Unknown Artist'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaylistDetail;
