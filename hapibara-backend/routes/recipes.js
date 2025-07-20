const express = require('express');
const Recipe = require('../models/Recipe');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/recipes
// @desc    Get all recipes with optional filtering
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { 
      category, 
      tags, 
      difficulty, 
      maxTime, 
      search,
      page = 1, 
      limit = 12 
    } = req.query;

    // Build query
    let query = { isPublished: true };
    
    if (category) query.category = category;
    if (difficulty) query.difficulty = difficulty;
    if (maxTime) query.prepTime = { $lte: parseInt(maxTime) };
    if (tags) query.tags = { $in: tags.split(',') };
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { tags: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const recipes = await Recipe.find(query)
      .populate('author', 'name')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Recipe.countDocuments(query);

    res.json({
      recipes,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/recipes/:id
// @desc    Get single recipe by ID
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate('author', 'name');
    
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    res.json(recipe);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/recipes
// @desc    Create a new recipe
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const recipe = new Recipe({
      ...req.body,
      author: req.userId
    });

    await recipe.save();
    await recipe.populate('author', 'name');

    res.status(201).json({
      message: 'Recipe created successfully! 🌿',
      recipe
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   PUT /api/recipes/:id/save
// @desc    Save/unsave recipe for user
// @access  Private
router.put('/:id/save', auth, async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recipe not found' });
    }

    const user = await User.findById(req.userId);
    const isSaved = user.savedRecipes.includes(recipe._id);

    if (isSaved) {
      user.savedRecipes = user.savedRecipes.filter(
        id => id.toString() !== recipe._id.toString()
      );
      recipe.saves = Math.max(0, recipe.saves - 1);
    } else {
      user.savedRecipes.push(recipe._id);
      recipe.saves += 1;
    }

    await Promise.all([user.save(), recipe.save()]);

    res.json({
      message: isSaved ? 'Recipe removed from saved' : 'Recipe saved! ❤️',
      isSaved: !isSaved,
      saves: recipe.saves
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;