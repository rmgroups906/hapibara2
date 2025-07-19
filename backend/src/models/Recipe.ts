import mongoose, { Schema } from 'mongoose';
import { IRecipe } from '../types';

const recipeSchema = new Schema<IRecipe>({
  title: {
    type: String,
    required: [true, 'Recipe title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Recipe description is required'],
    maxlength: [500, 'Description cannot exceed 500 characters']
  },
  image: {
    type: String,
    required: [true, 'Recipe image is required']
  },
  time: {
    type: Number,
    required: [true, 'Cooking time is required'],
    min: [1, 'Cooking time must be at least 1 minute']
  },
  servings: {
    type: Number,
    required: [true, 'Number of servings is required'],
    min: [1, 'Servings must be at least 1']
  },
  ingredients: [{
    type: String,
    required: true,
    trim: true
  }],
  instructions: [{
    type: String,
    required: true,
    trim: true
  }],
  tags: [{
    type: String,
    enum: ['cozy', 'energy', 'protein-rich', 'one-pot', '5-ingredients', '<15-mins', 'breakfast', 'lunch', 'dinner', 'snack', 'dessert', 'drink']
  }],
  story: {
    type: String,
    maxlength: [1000, 'Story cannot exceed 1000 characters']
  },
  hapiAdvice: {
    type: String,
    maxlength: [500, 'Hapi advice cannot exceed 500 characters']
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    default: 'easy'
  },
  nutrition: {
    calories: { type: Number, min: 0 },
    protein: { type: Number, min: 0 },
    carbs: { type: Number, min: 0 },
    fat: { type: Number, min: 0 }
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  likes: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  saves: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Indexes for better performance
recipeSchema.index({ title: 'text', description: 'text', tags: 1 });
recipeSchema.index({ isPublished: 1, createdAt: -1 });
recipeSchema.index({ author: 1 });

export default mongoose.model<IRecipe>('Recipe', recipeSchema);