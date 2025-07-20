const express = require('express');
const { body, validationResult } = require('express-validator');
const CommunityStory = require('../models/CommunityStory');

const router = express.Router();

// @route   GET /api/community/stories
// @desc    Get approved community stories
// @access  Public
router.get('/stories', async (req, res) => {
  try {
    const { 
      tag, 
      featured,
      page = 1, 
      limit = 6 
    } = req.query;

    let query = { isApproved: true };
    
    if (tag) query.tag = tag;
    if (featured) query.isFeatured = featured === 'true';

    const stories = await CommunityStory.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await CommunityStory.countDocuments(query);

    res.json({
      stories,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/community/stories
// @desc    Submit a community story
// @access  Public
router.post('/stories', [
  body('title').trim().isLength({ min: 5 }).withMessage('Title must be at least 5 characters'),
  body('story').trim().isLength({ min: 50 }).withMessage('Story must be at least 50 characters'),
  body('author.name').trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('author.email').isEmail().withMessage('Valid email is required'),
  body('tag').isIn(['Wellness Journey', 'Relationships', 'Mental Health', 'Lifestyle', 'Family'])
    .withMessage('Valid tag is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, story, author, tag } = req.body;
    
    // Create preview (first 150 characters)
    const preview = story.length > 150 ? story.substring(0, 150) + '...' : story;

    const communityStory = new CommunityStory({
      title,
      story,
      author,
      tag,
      preview
    });

    await communityStory.save();

    res.status(201).json({
      message: 'Thank you for sharing your story! 🌟 It will be reviewed and published soon.',
      story: communityStory
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;