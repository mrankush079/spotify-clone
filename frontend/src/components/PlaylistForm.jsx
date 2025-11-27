import { useState } from 'react';
import API from '../services/api';

const PlaylistForm = () => {
  const [form, setForm] = useState({ name: '', description: '', songs: [] });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post('/playlists', form);
    alert('Playlist created');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Playlist Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
      <button type="submit">Create Playlist</button>
    </form>
  );
};

export default PlaylistForm;