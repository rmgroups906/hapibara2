import mongoose, { Schema } from 'mongoose';
import { ICommunityStory } from '../types';

const communityStorySchema = new Schema<ICommunityStory>({
  title: {
    type: String,
    required: [true, 'Story title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  story: {
    type: String,
    required: [true, 'Story content is required'],
    maxlength: [2000, 'Story cannot exceed 2000 characters']
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
    maxlength: [100, 'Author name cannot exceed 100 characters']
  },
  authorEmail: {
    type: String,
    required: [true, 'Author email is required'],
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  image: {
    type: String
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  isPublished: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Indexes
communityStorySchema.index({ isApproved: 1, isPublished: 1, createdAt: -1 });
communityStorySchema.index({ authorEmail: 1 });

export default mongoose.model<ICommunityStory>('CommunityStory', communityStorySchema);