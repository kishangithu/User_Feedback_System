const Feedback = require('../Models/feedback');

//Controller to fetch all feedback
exports.fetchFeedbacks = async (req,res) => {
    try {
        // Fetch all feedback from the database
        const feedbacks = await Feedback.find();
        // Check if feedbacks were found
        if(!feedbacks) {
            return res.status(404).json({
                success: false,
                message: 'No feedbacks found',
            });
        }
        // Return the feedbacks in the response
        return res.status(200).json({
            success: true,
            message: 'Feedbacks fetched successfully',
            feedbacks: feedbacks,
        });
    }
    catch (error) {
        // Handle any errors that occur during the fetch
        console.error('Error fetching feedbacks:', error);
        return res.status(500).json({
            success: false,
            message: 'Error fetching feedbacks',
            error: error.message,
        });
    }
}