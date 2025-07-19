import express from 'express';
import {
  getCommunityStories,
  getCommunityStory,
  submitCommunityStory,
  getAllCommunityStories,
  approveCommunityStory,
  deleteCommunityStory
} from '../controllers/communityController';
import { protect, authorize } from '../middleware/auth';
import { validateCommunityStory } from '../middleware/validation';
import { upload, handleUploadError } from '../middleware/upload';

const router = express.Router();

// Public routes
router.get('/', getCommunityStories);
router.get('/:id', getCommunityStory);
router.post('/submit', upload.single('image'), handleUploadError, validateCommunityStory, submitCommunityStory);

// Admin routes
router.get('/admin/all', protect, authorize('admin'), getAllCommunityStories);
router.put('/admin/:id/approve', protect, authorize('admin'), approveCommunityStory);
router.delete('/admin/:id', protect, authorize('admin'), deleteCommunityStory);

export default router;