const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    category: {
        type: String,
        enum: ['Suggestion', 'Bug Report', 'Feature Request', 'Other'],
        required: true,
    }
});

module.exports = mongoose.model('feedback', feedbackSchema);