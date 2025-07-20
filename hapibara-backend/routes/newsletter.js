const express = require('express');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const router = express.Router();

// Simple in-memory storage for demo (use database in production)
const subscribers = new Set();

// @route   POST /api/newsletter/subscribe
// @desc    Subscribe to newsletter
// @access  Public
router.post('/subscribe', [
  body('email').isEmail().withMessage('Please enter a valid email')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    if (subscribers.has(email)) {
      return res.status(400).json({ message: 'You\'re already part of our Chill Club! 💚' });
    }

    subscribers.add(email);

    // In production, you'd save to database and send welcome email
    console.log(`New subscriber: ${email}`);

    res.json({
      message: 'Welcome to the Chill Club! 🌿 Gentle updates coming your way.',
      email
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/newsletter/count
// @desc    Get subscriber count
// @access  Public
router.get('/count', (req, res) => {
  res.json({ count: subscribers.size });
});

module.exports = router;