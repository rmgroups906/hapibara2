import { Request, Response } from 'express';
import CommunityStory from '../models/CommunityStory';
import { uploadImage } from '../config/cloudinary';
import { AuthRequest } from '../types';

export const getCommunityStories = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 10
    } = req.query;

    // Only get approved and published stories for public view
    const query = { isApproved: true, isPublished: true };

    const stories = await CommunityStory.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));

    const total = await CommunityStory.countDocuments(query);

    res.json({
      success: true,
      data: {
        stories,
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

export const getCommunityStory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const story = await CommunityStory.findOne({
      _id: id,
      isApproved: true,
      isPublished: true
    });

    if (!story) {
      return res.status(404).json({
        success: false,
        message: 'Community story not found'
      });
    }

    res.json({
      success: true,
      data: { story }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const submitCommunityStory = async (req: Request, res: Response) => {
  try {
    const {
      title,
      story,
      author,
      authorEmail
    } = req.body;

    let imageUrl = '';

    // Handle image upload
    if (req.file) {
      const result = await uploadImage(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        'community'
      );
      imageUrl = result.secure_url;
    }

    const communityStory = await CommunityStory.create({
      title,
      story,
      author,
      authorEmail,
      image: imageUrl
    });

    res.status(201).json({
      success: true,
      message: 'Thank you for sharing your story! It will be reviewed before publishing.',
      data: { story: communityStory }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

// Admin routes
export const getAllCommunityStories = async (req: AuthRequest, res: Response) => {
  try {
    const {
      page = 1,
      limit = 10,
      status = 'all'
    } = req.query;

    let query: any = {};

    if (status === 'pending') {
      query = { isApproved: false };
    } else if (status === 'approved') {
      query = { isApproved: true };
    } else if (status === 'published') {
      query = { isApproved: true, isPublished: true };
    }

    const stories = await CommunityStory.find(query)
      .sort({ createdAt: -1 })
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));

    const total = await CommunityStory.countDocuments(query);

    res.json({
      success: true,
      data: {
        stories,
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

export const approveCommunityStory = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { isApproved, isPublished } = req.body;

    const story = await CommunityStory.findByIdAndUpdate(
      id,
      { isApproved, isPublished },
      { new: true, runValidators: true }
    );

    if (!story) {
      return res.status(404).json({
        success: false,
        message: 'Community story not found'
      });
    }

    res.json({
      success: true,
      message: 'Community story status updated successfully',
      data: { story }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const deleteCommunityStory = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const story = await CommunityStory.findByIdAndDelete(id);

    if (!story) {
      return res.status(404).json({
        success: false,
        message: 'Community story not found'
      });
    }

    res.json({
      success: true,
      message: 'Community story deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};