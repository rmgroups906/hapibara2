import { Request, Response } from 'express';
import Product from '../models/Product';
import { uploadImage } from '../config/cloudinary';
import { AuthRequest } from '../types';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 12,
      search,
      category,
      label,
      minPrice,
      maxPrice,
      inStock
    } = req.query;

    // Build query
    const query: any = { isActive: true };

    if (search) {
      query.$text = { $search: search as string };
    }

    if (category) {
      query.category = category;
    }

    if (label) {
      query.label = label;
    }

    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = parseFloat(minPrice as string);
      if (maxPrice) query.price.$lte = parseFloat(maxPrice as string);
    }

    if (inStock === 'true') {
      query['inventory.quantity'] = { $gt: 0 };
    }

    // Execute query with pagination
    const products = await Product.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));

    const total = await Product.countDocuments(query);

    res.json({
      success: true,
      data: {
        products,
        pagination: {
          page: parseInt(page as string),
          limit: parseInt(limit as string),
          total,
          pages: Math.ceil(total / parseInt(limit as string))
        }
      }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({ slug, isActive: true });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      data: { product }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const createProduct = async (req: AuthRequest, res: Response) => {
  try {
    const {
      name,
      description,
      price,
      comparePrice,
      category,
      label,
      features,
      hapiNote,
      inventory,
      seo
    } = req.body;

    const images: string[] = [];

    // Handle multiple image uploads
    if (req.files && Array.isArray(req.files)) {
      for (const file of req.files) {
        const result = await uploadImage(
          `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
          'products'
        );
        images.push(result.secure_url);
      }
    }

    const product = await Product.create({
      name,
      description,
      price: parseFloat(price),
      comparePrice: comparePrice ? parseFloat(comparePrice) : undefined,
      images,
      category,
      label,
      features: JSON.parse(features || '[]'),
      hapiNote,
      inventory: JSON.parse(inventory || '{}'),
      seo: JSON.parse(seo || '{}')
    });

    res.status(201).json({
      success: true,
      message: 'Product created successfully',
      data: { product }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const updateProduct = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Parse JSON fields if they exist
    if (updateData.features) {
      updateData.features = JSON.parse(updateData.features);
    }
    if (updateData.inventory) {
      updateData.inventory = JSON.parse(updateData.inventory);
    }
    if (updateData.seo) {
      updateData.seo = JSON.parse(updateData.seo);
    }

    // Parse numeric fields
    if (updateData.price) {
      updateData.price = parseFloat(updateData.price);
    }
    if (updateData.comparePrice) {
      updateData.comparePrice = parseFloat(updateData.comparePrice);
    }

    // Handle image uploads
    if (req.files && Array.isArray(req.files)) {
      const images: string[] = [];
      for (const file of req.files) {
        const result = await uploadImage(
          `data:${file.mimetype};base64,${file.buffer.toString('base64')}`,
          'products'
        );
        images.push(result.secure_url);
      }
      updateData.images = images;
    }

    const product = await Product.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product updated successfully',
      data: { product }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const deleteProduct = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const getProductsByCategory = async (req: Request, res: Response) => {
  try {
    const { category } = req.params;
    const { limit = 8 } = req.query;

    const products = await Product.find({
      category,
      isActive: true
    })
      .limit(parseInt(limit as string))
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: { products }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const getFeaturedProducts = async (req: Request, res: Response) => {
  try {
    const { limit = 4 } = req.query;

    const products = await Product.find({
      label: "Hapi's Pick",
      isActive: true
    })
      .limit(parseInt(limit as string))
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: { products }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};