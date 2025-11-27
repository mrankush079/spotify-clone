import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Song from '../models/Song.js';

dotenv.config();

const songs = [
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    genre: 'Pop',
    coverUrl: 'https://link-to-cover.jpg',
    audioUrl: 'https://link-to-audio.mp3',
  },
  {
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    album: 'Divide',
    genre: 'Pop',
    coverUrl: 'https://link-to-cover.jpg',
    audioUrl: 'https://link-to-audio.mp3',
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Song.deleteMany();
    await Song.insertMany(songs);
    console.log('✅ Songs seeded');
    process.exit();
  })
  .catch((err) => console.error('❌ Seeding failed:', err));