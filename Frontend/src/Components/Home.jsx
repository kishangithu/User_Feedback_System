import React, { useEffect } from 'react'
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";

export const Home = ({setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage('Home');
    }, []);

    const { handleSubmit, register, formState: { errors }, reset } = useForm();

    const submitFeedback = async (data) => {
        toast.loading('Submitting your feedback...');
        const formData = JSON.stringify({
            name: data.name,
            email: data.email,
            feedback: data.feedback,
            category: data.category
        });

        try {
            const baseURL = import.meta.env.VITE_BACKEND_URL;
            const response = await fetch(`${baseURL}/feedback/create`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: formData
            });
            if (!response.ok) {
                throw new Error('Network Error!');
            }
            reset();
        }
        catch (error) {
            console.error("Error submitting feedback:", error);
            toast.dismiss();
            toast.error('Failed to submit feedback. Please try again.');
            return;
        }

        console.log(formData);
        toast.dismiss();
        toast.success('Feedback submitted successfully!');
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit(submitFeedback)} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg space-y-4">
                <h2 className="text-2xl font-bold text-center">Submit Your Feedback</h2>
                
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input 
                        {...register("name", { required: "Name is required" })} 
                        type="text" 
                        placeholder="Enter your name" 
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input 
                        {...register("email", { 
                            required: "Email is required", 
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: "Invalid email address"
                            }
                        })} 
                        type="email" 
                        placeholder="Enter your Email ID" 
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                <div>
                    <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
                    <textarea 
                        {...register("feedback", { required: "Feedback is required" })} 
                        rows={5} 
                        placeholder="Enter your feedback" 
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.feedback && <p className="text-red-500 text-xs">{errors.feedback.message}</p>}
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">Feedback Category</label>
                    <select 
                        {...register("category", { required: "Please select a category" })}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Category</option>
                        <option value="Bug Report">Bug Report</option>
                        <option value="Suggestion">Suggestion</option>
                        <option value="Feature Request">Feature Request</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.category && <p className="text-red-500 text-xs">{errors.category.message}</p>}
                </div>

                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit Feedback</button>            
            </form>
        </div>
    )
}