import express from 'express';
import {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  likeRecipe,
  saveRecipe,
  getUserRecipes
} from '../controllers/recipeController';
import { protect, authorize, optionalAuth } from '../middleware/auth';
import { validateRecipe } from '../middleware/validation';
import { upload, handleUploadError } from '../middleware/upload';

const router = express.Router();

// Public routes
router.get('/', optionalAuth, getRecipes);
router.get('/:id', optionalAuth, getRecipe);

// Protected routes
router.post('/', protect, upload.single('image'), handleUploadError, validateRecipe, createRecipe);
router.put('/:id', protect, upload.single('image'), handleUploadError, validateRecipe, updateRecipe);
router.delete('/:id', protect, deleteRecipe);
router.post('/:id/like', protect, likeRecipe);
router.post('/:id/save', protect, saveRecipe);
router.get('/user/my-recipes', protect, getUserRecipes);

export default router;