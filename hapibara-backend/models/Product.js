const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
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
  longDescription: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  originalPrice: {
    type: Number
  },
  category: {
    type: String,
    enum: ['calm-kits', 'wellness', 'merch', 'digital'],
    required: true
  },
  label: {
    type: String,
    enum: ['COZY', 'ENERGY', 'CALM', 'ECO', 'CUDDLE', "HAPI'S PICK"],
    required: true
  },
  labelColor: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }],
  tags: [{
    type: String
  }],
  ingredients: [{
    type: String
  }],
  howToUse: {
    type: String
  },
  hapiNote: {
    type: String
  },
  inventory: {
    type: Number,
    default: 0
  },
  isDigital: {
    type: Boolean,
    default: false
  },
  downloadUrl: {
    type: String // for digital products
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
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    comment: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  isNew: {
    type: Boolean,
    default: false
  },
  isBestseller: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  subscriptionOption: {
    available: {
      type: Boolean,
      default: false
    },
    discount: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);