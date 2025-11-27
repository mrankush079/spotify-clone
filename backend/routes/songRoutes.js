import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import Song from '../models/Song.js';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  const songs = await Song.find();
  res.json(songs);
});

export default router;