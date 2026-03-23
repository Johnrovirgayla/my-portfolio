const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    tags: [{
        type: String,
    }],
    featured: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        default: '',
    },
    views: {
        type: Number,
        default: 0,
    },
    published: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
