import { useState } from 'react';
import API from '../services/api';

const PlaylistForm = () => {
  const [form, setForm] = useState({ name: '', description: '', songs: [''] });

  const handleSongChange = (index) => (e) => {
    const newSongs = [...form.songs];
    newSongs[index] = e.target.value;
    setForm({ ...form, songs: newSongs });
  };

  const addSongField = () => {
    setForm({ ...form, songs: [...form.songs, ''] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/playlists', form);
      alert('Playlist created');
    } catch (err) {
      console.error(err);
      alert('Error creating playlist');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={form.name}
        placeholder="Playlist Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        value={form.description}
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      {form.songs.map((song, idx) => (
        <input
          key={idx}
          value={song}
          placeholder="Song URL / ID"
          onChange={handleSongChange(idx)}
        />
      ))}

      <button type="button" onClick={addSongField}>
        Add another song
      </button>

      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default PlaylistForm;
