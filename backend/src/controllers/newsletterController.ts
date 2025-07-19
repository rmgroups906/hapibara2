import { Request, Response } from 'express';
import Newsletter from '../models/Newsletter';
import { sendNewsletterConfirmation } from '../utils/email';

export const subscribeNewsletter = async (req: Request, res: Response) => {
  try {
    const { email, preferences } = req.body;

    // Check if email already exists
    const existingSubscription = await Newsletter.findOne({ email });
    
    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return res.status(400).json({
          success: false,
          message: 'Email is already subscribed to our newsletter'
        });
      } else {
        // Reactivate subscription
        existingSubscription.isActive = true;
        if (preferences) {
          existingSubscription.preferences = preferences;
        }
        await existingSubscription.save();

        // Send confirmation email
        sendNewsletterConfirmation(email).catch(console.error);

        return res.json({
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
          data: { subscription: existingSubscription }
        });
      }
    }

    // Create new subscription
    const subscription = await Newsletter.create({
      email,
      preferences: preferences || {
        recipes: true,
        blog: true,
        products: true
      }
    });

    // Send confirmation email
    sendNewsletterConfirmation(email).catch(console.error);

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to the Chill Club! Check your email for confirmation.',
      data: { subscription }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const unsubscribeNewsletter = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const subscription = await Newsletter.findOneAndUpdate(
      { email },
      { isActive: false },
      { new: true }
    );

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Email not found in our newsletter list'
      });
    }

    res.json({
      success: true,
      message: 'Successfully unsubscribed from newsletter'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const updateNewsletterPreferences = async (req: Request, res: Response) => {
  try {
    const { email, preferences } = req.body;

    const subscription = await Newsletter.findOneAndUpdate(
      { email, isActive: true },
      { preferences },
      { new: true, runValidators: true }
    );

    if (!subscription) {
      return res.status(404).json({
        success: false,
        message: 'Active subscription not found for this email'
      });
    }

    res.json({
      success: true,
      message: 'Newsletter preferences updated successfully',
      data: { subscription }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const getNewsletterStats = async (req: Request, res: Response) => {
  try {
    const totalSubscribers = await Newsletter.countDocuments({ isActive: true });
    const totalUnsubscribed = await Newsletter.countDocuments({ isActive: false });
    
    const preferenceStats = await Newsletter.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: null,
          recipesSubscribers: { $sum: { $cond: ['$preferences.recipes', 1, 0] } },
          blogSubscribers: { $sum: { $cond: ['$preferences.blog', 1, 0] } },
          productsSubscribers: { $sum: { $cond: ['$preferences.products', 1, 0] } }
        }
      }
    ]);

    res.json({
      success: true,
      data: {
        totalSubscribers,
        totalUnsubscribed,
        preferences: preferenceStats[0] || {
          recipesSubscribers: 0,
          blogSubscribers: 0,
          productsSubscribers: 0
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