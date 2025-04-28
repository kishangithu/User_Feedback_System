const express = require('express');
const router = express.Router();

const { createFeedback } = require('../Controllers/postFeedback');
const { fetchFeedbacks } = require('../Controllers/fetchFeedback');

// Route to create feedback
router.post('/feedback/create', createFeedback);   
// Route to fetch all feedback
router.get('/feedbacks', fetchFeedbacks);

module.exports = router;
// This code defines the routes for creating and fetching feedback in an Express.js application.