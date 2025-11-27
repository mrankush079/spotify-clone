import express from 'express';
import {
  createPlaylist,
  getUserPlaylists,
  updatePlaylist,
  deletePlaylist,
} from '../controllers/playlistController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', protect, createPlaylist);
router.get('/', protect, getUserPlaylists);
router.put('/:id', protect, updatePlaylist);
router.delete('/:id', protect, deletePlaylist);

export default router;