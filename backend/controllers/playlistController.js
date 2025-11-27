import Playlist from '../models/Playlist.js';

export const createPlaylist = async (req, res) => {
  try {
    const { name, description, songs } = req.body;
    const playlist = await Playlist.create({
      name,
      description,
      songs,
      user: req.user.id,
    });
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getUserPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.find({ user: req.user.id }).populate('songs');
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updatePlaylist = async (req, res) => {
  try {
    const playlist = await Playlist.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!playlist) return res.status(404).json({ error: 'Playlist not found' });
    res.json(playlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deletePlaylist = async (req, res) => {
  try {
    const deleted = await Playlist.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!deleted) return res.status(404).json({ error: 'Playlist not found' });
    res.json({ message: 'Playlist deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};