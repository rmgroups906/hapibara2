import mongoose, { Schema } from 'mongoose';
import { INewsletter } from '../types';

const newsletterSchema = new Schema<INewsletter>({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  preferences: {
    recipes: {
      type: Boolean,
      default: true
    },
    blog: {
      type: Boolean,
      default: true
    },
    products: {
      type: Boolean,
      default: true
    }
  }
}, {
  timestamps: true
});

// Indexes
newsletterSchema.index({ email: 1 });
newsletterSchema.index({ isActive: 1 });

export default mongoose.model<INewsletter>('Newsletter', newsletterSchema);