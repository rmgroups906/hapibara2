import express from 'express';
import {
  getBlogPosts,
  getBlogPost,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  likeBlogPost,
  getUserBlogPosts
} from '../controllers/blogController';
import { protect, authorize, optionalAuth } from '../middleware/auth';
import { validateBlogPost } from '../middleware/validation';
import { upload, handleUploadError } from '../middleware/upload';

const router = express.Router();

// Public routes
router.get('/', optionalAuth, getBlogPosts);
router.get('/:slug', optionalAuth, getBlogPost);

// Protected routes
router.post('/', protect, authorize('admin'), upload.single('image'), handleUploadError, validateBlogPost, createBlogPost);
router.put('/:id', protect, authorize('admin'), upload.single('image'), handleUploadError, validateBlogPost, updateBlogPost);
router.delete('/:id', protect, authorize('admin'), deleteBlogPost);
router.post('/:id/like', protect, likeBlogPost);
router.get('/user/my-posts', protect, authorize('admin'), getUserBlogPosts);

export default router;