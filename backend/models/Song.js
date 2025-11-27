import mongoose from 'mongoose';

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
  genre: String,
  coverUrl: String,
  audioUrl: String,
});

export default mongoose.model('Song', songSchema);