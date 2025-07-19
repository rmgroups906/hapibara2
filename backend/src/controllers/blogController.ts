import { Request, Response } from 'express';
import BlogPost from '../models/BlogPost';
import { uploadImage } from '../config/cloudinary';
import { AuthRequest } from '../types';

export const getBlogPosts = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      category,
      author
    } = req.query;

    // Build query
    const query: any = { isPublished: true };

    if (search) {
      query.$text = { $search: search as string };
    }

    if (category) {
      query.category = category;
    }

    if (author) {
      query.author = author;
    }

    // Execute query with pagination
    const posts = await BlogPost.find(query)
      .populate('author', 'name avatar')
      .sort({ publishedAt: -1 })
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));

    const total = await BlogPost.countDocuments(query);

    res.json({
      success: true,
      data: {
        posts,
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

export const getBlogPost = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const post = await BlogPost.findOne({ slug, isPublished: true })
      .populate('author', 'name avatar')
      .populate('likes', 'name');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    // Increment views
    post.views += 1;
    await post.save();

    res.json({
      success: true,
      data: { post }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const createBlogPost = async (req: AuthRequest, res: Response) => {
  try {
    const {
      title,
      excerpt,
      content,
      category,
      tags,
      readTime,
      isPublished
    } = req.body;

    let imageUrl = '';

    // Handle image upload
    if (req.file) {
      const result = await uploadImage(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        'blog'
      );
      imageUrl = result.secure_url;
    }

    const post = await BlogPost.create({
      title,
      excerpt,
      content,
      image: imageUrl,
      category,
      tags: JSON.parse(tags || '[]'),
      readTime,
      isPublished: isPublished === 'true',
      author: req.user!._id
    });

    await post.populate('author', 'name avatar');

    res.status(201).json({
      success: true,
      message: 'Blog post created successfully',
      data: { post }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const updateBlogPost = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Parse JSON fields if they exist
    if (updateData.tags) {
      updateData.tags = JSON.parse(updateData.tags);
    }

    if (updateData.isPublished) {
      updateData.isPublished = updateData.isPublished === 'true';
    }

    // Handle image upload
    if (req.file) {
      const result = await uploadImage(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        'blog'
      );
      updateData.image = result.secure_url;
    }

    const post = await BlogPost.findOneAndUpdate(
      { _id: id, author: req.user!._id },
      updateData,
      { new: true, runValidators: true }
    ).populate('author', 'name avatar');

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found or unauthorized'
      });
    }

    res.json({
      success: true,
      message: 'Blog post updated successfully',
      data: { post }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const deleteBlogPost = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const post = await BlogPost.findOneAndDelete({
      _id: id,
      author: req.user!._id
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found or unauthorized'
      });
    }

    res.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const likeBlogPost = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user!._id;

    const post = await BlogPost.findById(id);
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found'
      });
    }

    const isLiked = post.likes.includes(userId);

    if (isLiked) {
      post.likes = post.likes.filter(like => like.toString() !== userId.toString());
    } else {
      post.likes.push(userId);
    }

    await post.save();

    res.json({
      success: true,
      message: isLiked ? 'Post unliked' : 'Post liked',
      data: {
        isLiked: !isLiked,
        likesCount: post.likes.length
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

export const getUserBlogPosts = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user!._id;

    const posts = await BlogPost.find({ author: userId })
      .populate('author', 'name avatar')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: { posts }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};