import express from 'express';
import {
  subscribeNewsletter,
  unsubscribeNewsletter,
  updateNewsletterPreferences,
  getNewsletterStats
} from '../controllers/newsletterController';
import { protect, authorize } from '../middleware/auth';
import { validateNewsletter } from '../middleware/validation';

const router = express.Router();

// Public routes
router.post('/subscribe', validateNewsletter, subscribeNewsletter);
router.post('/unsubscribe', validateNewsletter, unsubscribeNewsletter);
router.put('/preferences', updateNewsletterPreferences);

// Admin routes
router.get('/stats', protect, authorize('admin'), getNewsletterStats);

export default router;