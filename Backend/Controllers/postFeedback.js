const Feedback = require('../Models/feedback');

exports.createFeedback = async (req, res) => {
    try {
        // Extract feedback data from the request body
        const { name, email, feedback, category } = req.body;

        // Create a new feedback entry
        const newFeedback = await Feedback.create({
            name,
            email,
            feedback,
            category
        });

        // Save the feedback to the database
        // await newFeedback.save();

        // Return a success response
        return res.status(201).json({
            success: true,
            message: 'Feedback submitted successfully',
            feedback: newFeedback,
        });
    } catch (error) {
        // Handle any errors that occur during the creation process
        console.error('Error creating feedback:', error);
        return res.status(500).json({
            success: false,
            message: 'Error submitting feedback',
            error: error.message,
        });
    }
}