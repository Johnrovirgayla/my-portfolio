const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    technologies: [{
        type: String,
    }],
    liveLink: {
        type: String,
        default: null,
    },
    githubLink: {
        type: String,
        default: null,
    },
    category: {
        type: String,
        enum: ['Web Development', 'UI/UX Design', 'Mobile App', 'Data Analysis', 'Other'],
        default: 'Web Development',
    },
    featured: {
        type: Boolean,
        default: false,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
