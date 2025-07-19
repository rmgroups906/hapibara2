import { Request, Response } from 'express';
import Recipe from '../models/Recipe';
import { uploadImage } from '../config/cloudinary';
import { AuthRequest } from '../types';

export const getRecipes = async (req: Request, res: Response) => {
  try {
    const {
      page = 1,
      limit = 12,
      search,
      tags,
      difficulty,
      time,
      author
    } = req.query;

    // Build query
    const query: any = { isPublished: true };

    if (search) {
      query.$text = { $search: search as string };
    }

    if (tags) {
      const tagArray = (tags as string).split(',');
      query.tags = { $in: tagArray };
    }

    if (difficulty) {
      query.difficulty = difficulty;
    }

    if (time) {
      query.time = { $lte: parseInt(time as string) };
    }

    if (author) {
      query.author = author;
    }

    // Execute query with pagination
    const recipes = await Recipe.find(query)
      .populate('author', 'name avatar')
      .sort({ createdAt: -1 })
      .limit(parseInt(limit as string))
      .skip((parseInt(page as string) - 1) * parseInt(limit as string));

    const total = await Recipe.countDocuments(query);

    res.json({
      success: true,
      data: {
        recipes,
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

export const getRecipe = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findById(id)
      .populate('author', 'name avatar')
      .populate('likes', 'name')
      .populate('saves', 'name');

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    res.json({
      success: true,
      data: { recipe }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const createRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const {
      title,
      description,
      time,
      servings,
      ingredients,
      instructions,
      tags,
      story,
      hapiAdvice,
      difficulty,
      nutrition
    } = req.body;

    let imageUrl = '';

    // Handle image upload
    if (req.file) {
      const result = await uploadImage(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        'recipes'
      );
      imageUrl = result.secure_url;
    }

    const recipe = await Recipe.create({
      title,
      description,
      image: imageUrl,
      time,
      servings,
      ingredients: JSON.parse(ingredients),
      instructions: JSON.parse(instructions),
      tags: JSON.parse(tags || '[]'),
      story,
      hapiAdvice,
      difficulty,
      nutrition: JSON.parse(nutrition || '{}'),
      author: req.user!._id
    });

    await recipe.populate('author', 'name avatar');

    res.status(201).json({
      success: true,
      message: 'Recipe created successfully',
      data: { recipe }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const updateRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // Parse JSON fields if they exist
    if (updateData.ingredients) {
      updateData.ingredients = JSON.parse(updateData.ingredients);
    }
    if (updateData.instructions) {
      updateData.instructions = JSON.parse(updateData.instructions);
    }
    if (updateData.tags) {
      updateData.tags = JSON.parse(updateData.tags);
    }
    if (updateData.nutrition) {
      updateData.nutrition = JSON.parse(updateData.nutrition);
    }

    // Handle image upload
    if (req.file) {
      const result = await uploadImage(
        `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`,
        'recipes'
      );
      updateData.image = result.secure_url;
    }

    const recipe = await Recipe.findOneAndUpdate(
      { _id: id, author: req.user!._id },
      updateData,
      { new: true, runValidators: true }
    ).populate('author', 'name avatar');

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found or unauthorized'
      });
    }

    res.json({
      success: true,
      message: 'Recipe updated successfully',
      data: { recipe }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const deleteRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const recipe = await Recipe.findOneAndDelete({
      _id: id,
      author: req.user!._id
    });

    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found or unauthorized'
      });
    }

    res.json({
      success: true,
      message: 'Recipe deleted successfully'
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};

export const likeRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user!._id;

    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    const isLiked = recipe.likes.includes(userId);

    if (isLiked) {
      recipe.likes = recipe.likes.filter(like => like.toString() !== userId.toString());
    } else {
      recipe.likes.push(userId);
    }

    await recipe.save();

    res.json({
      success: true,
      message: isLiked ? 'Recipe unliked' : 'Recipe liked',
      data: {
        isLiked: !isLiked,
        likesCount: recipe.likes.length
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

export const saveRecipe = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.user!._id;

    const recipe = await Recipe.findById(id);
    if (!recipe) {
      return res.status(404).json({
        success: false,
        message: 'Recipe not found'
      });
    }

    const isSaved = recipe.saves.includes(userId);

    if (isSaved) {
      recipe.saves = recipe.saves.filter(save => save.toString() !== userId.toString());
    } else {
      recipe.saves.push(userId);
    }

    await recipe.save();

    res.json({
      success: true,
      message: isSaved ? 'Recipe unsaved' : 'Recipe saved',
      data: {
        isSaved: !isSaved,
        savesCount: recipe.saves.length
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

export const getUserRecipes = async (req: AuthRequest, res: Response) => {
  try {
    const { type = 'created' } = req.query;
    const userId = req.user!._id;

    let recipes;

    if (type === 'saved') {
      recipes = await Recipe.find({
        saves: userId,
        isPublished: true
      })
        .populate('author', 'name avatar')
        .sort({ createdAt: -1 });
    } else if (type === 'liked') {
      recipes = await Recipe.find({
        likes: userId,
        isPublished: true
      })
        .populate('author', 'name avatar')
        .sort({ createdAt: -1 });
    } else {
      recipes = await Recipe.find({ author: userId })
        .populate('author', 'name avatar')
        .sort({ createdAt: -1 });
    }

    res.json({
      success: true,
      data: { recipes }
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
};