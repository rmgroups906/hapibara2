const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  hapiAdvice: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  prepTime: {
    type: Number,
    required: true // in minutes
  },
  cookTime: {
    type: Number,
    required: true // in minutes
  },
  servings: {
    type: Number,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['Super Easy', 'Easy', 'Medium', 'Advanced'],
    default: 'Easy'
  },
  category: {
    type: String,
    enum: ['cozy', 'energy', 'calm', 'fresh'],
    required: true
  },
  tags: [{
    type: String
  }],
  ingredients: [{
    item: { type: String, required: true },
    amount: {
      cups: { type: String, required: true },
      grams: { type: String, required: true }
    }
  }],
  steps: [{
    number: { type: Number, required: true },
    title: { type: String, required: true },
    instruction: { type: String, required: true }
  }],
  nutrition: {
    calories: Number,
    protein: String,
    carbs: String,
    fiber: String,
    fat: String
  },
  saves: {
    type: Number,
    default: 0
  },
  rating: {
    average: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  isPublished: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);