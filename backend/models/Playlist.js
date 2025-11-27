import mongoose from 'mongoose';

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

export default mongoose.model('Playlist', playlistSchema);