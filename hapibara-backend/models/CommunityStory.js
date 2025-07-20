const mongoose = require('mongoose');

const communityStorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  story: {
    type: String,
    required: true
  },
  author: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    avatar: String
  },
  tag: {
    type: String,
    enum: ['Wellness Journey', 'Relationships', 'Mental Health', 'Lifestyle', 'Family'],
    required: true
  },
  preview: {
    type: String,
    required: true
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('CommunityStory', communityStorySchema);