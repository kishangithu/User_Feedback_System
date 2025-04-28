import React, { useEffect, useState } from 'react'; 
import toast from 'react-hot-toast';

export const Dashboard = ({setCurrentPage}) => {
    const [feedbacks, setFeedbacks] = useState([]); 
    const [currentCategory, setCurrentCategory] = useState('All');
    const [sortOption, setSortOption] = useState('newest');

    const fetchFeedbackData = async () => {
        toast.loading('Fetching data...');
        try {
            const baseURL = import.meta.env.VITE_BACKEND_URL;
            const response = await fetch(`${baseURL}/feedbacks`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Network Error!');
            }

            const data = await response.json();
            setFeedbacks(data.feedbacks); 
        }
        catch (error) {
            console.error("Error fetching data:", error);
            toast.dismiss();
            toast.error('Failed to fetch data. Please try again.');
            return;
        }

        toast.dismiss();
        toast.success('Feedbacks fetched successfully!');
    }

    useEffect(() => {
        setCurrentPage('Dashboard');
        fetchFeedbackData(); 
    }, []);

    // Function to sort feedbacks based on selected option
    const sortedFeedbacks = feedbacks
        .filter((feedback) => currentCategory === 'All' || feedback.category === currentCategory)
        .sort((a, b) => {
            if (sortOption === 'newest') {
                return new Date(b.createdAt) - new Date(a.createdAt); // Newest first
            } else {
                return new Date(a.createdAt) - new Date(b.createdAt); // Oldest first
            }
        });

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h3 className="text-2xl font-bold mb-6">Welcome to Dashboard</h3>

            <div className="mb-4">
                <div className="flex gap-3 mb-4">
                    <button 
                        className={`px-4 py-2 ${currentCategory === 'All' ? 'bg-blue-400 text-white' : 'bg-blue-200 text-black'} rounded-xl hover:bg-blue-600 hover:cursor-pointer hover:text-white transition duration-200`}                        
                        onClick={() => setCurrentCategory('All')}
                    >
                        All
                    </button>
                    <button 
                        className={`px-4 py-2 ${currentCategory === 'Bug Report' ? 'bg-blue-400 text-white' : 'bg-blue-200 text-black'} rounded-xl hover:bg-blue-600 hover:cursor-pointer hover:text-white transition duration-200`}
                        onClick={() => setCurrentCategory('Bug Report')}
                    >
                        Bug Report
                    </button>
                    <button 
                        className={`px-4 py-2 ${currentCategory === 'Feature Request' ? 'bg-blue-400 text-white' : 'bg-blue-200 text-black'} rounded-xl hover:bg-blue-600 hover:cursor-pointer hover:text-white transition duration-200`}
                        onClick={() => setCurrentCategory('Feature Request')}
                    >
                        Feature Request
                    </button>
                    <button 
                        className={`px-4 py-2 ${currentCategory === 'Suggestion' ? 'bg-blue-400 text-white' : 'bg-blue-200 text-black'} rounded-xl hover:bg-blue-600 hover:cursor-pointer hover:text-white transition duration-200`}
                        onClick={() => setCurrentCategory('Suggestion')}
                    >
                        Suggestion
                    </button>
                    <button 
                        className={`px-4 py-2 ${currentCategory === 'Other' ? 'bg-blue-400 text-white' : 'bg-blue-200 text-black'} rounded-xl hover:bg-blue-600 hover:cursor-pointer hover:text-white transition duration-200`}
                        onClick={() => setCurrentCategory('Other')}
                    >
                        Other
                    </button>
                </div>
                <div className="flex items-center gap-4 mb-6">
                    <label htmlFor="category" className="block text-center font-medium text-gray-700">Sort By:</label>
                    <select 
                        onChange={(e) => setSortOption(e.target.value)} 
                        value={sortOption} 
                        className="px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="newest">Sort by New to Old</option>
                        <option value="oldest">Sort by Old to New</option>
                    </select>
                </div>
            </div>

            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left">Name</th>
                        <th className="px-4 py-2 text-left">Email</th>
                        <th className="px-4 py-2 text-left">Feedback</th>
                        <th className="px-4 py-2 text-left">Category</th>
                        <th className="px-4 py-2 text-left">Date-Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedFeedbacks.length > 0 ? sortedFeedbacks.map((feedback) => (
                            <tr key={feedback._id} className="hover:bg-gray-100">
                                <td className="px-4 py-2">{feedback.name}</td>
                                <td className="px-4 py-2">{feedback.email}</td>
                                <td className="px-4 py-2">{feedback.feedback}</td>
                                <td className="px-4 py-2">{feedback.category}</td>
                                <td className="px-4 py-2">{new Date(feedback.createdAt).toLocaleString()}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="text-center px-4 py-2">No feedbacks available</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}