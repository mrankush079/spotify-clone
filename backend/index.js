import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js'; // ✅ Import AFTER express
import songRoutes from './routes/songRoutes.js';
import playlistRoutes from './routes/playlistRoutes.js';


dotenv.config();

const app = express(); // ✅ Declare BEFORE using

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // ✅ Now safe to use
app.use('/api/songs', songRoutes);
app.use('/api/playlists', playlistRoutes);


// Test route
app.get('/', (req, res) => {
  res.send('Spotify Clone API is running...');
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });