import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getFeaturedProducts
} from '../controllers/productController';
import { protect, authorize } from '../middleware/auth';
import { validateProduct } from '../middleware/validation';
import { upload, handleUploadError } from '../middleware/upload';

const router = express.Router();

// Public routes
router.get('/', getProducts);
router.get('/featured', getFeaturedProducts);
router.get('/category/:category', getProductsByCategory);
router.get('/:slug', getProduct);

// Admin routes
router.post('/', protect, authorize('admin'), upload.array('images', 5), handleUploadError, validateProduct, createProduct);
router.put('/:id', protect, authorize('admin'), upload.array('images', 5), handleUploadError, validateProduct, updateProduct);
router.delete('/:id', protect, authorize('admin'), deleteProduct);

export default router;