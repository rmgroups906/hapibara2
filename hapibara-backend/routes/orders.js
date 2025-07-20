const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

// Simple order storage (use database in production)
const orders = [];

// @route   POST /api/orders
// @desc    Create new order
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const { items, shippingAddress, total } = req.body;

    const order = {
      id: Date.now().toString(),
      userId: req.userId,
      items,
      shippingAddress,
      total,
      status: 'processing',
      createdAt: new Date()
    };

    orders.push(order);

    res.status(201).json({
      message: 'Order placed successfully! 🌿 Your gentle products are on their way.',
      order
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/orders
// @desc    Get user's orders
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const userOrders = orders.filter(order => order.userId === req.userId);
    res.json(userOrders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;