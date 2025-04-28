# User Feedback System

## Overview

The **User Feedback System** is a web application that allows users to submit feedback in various categories. Admins can view feedback on the dashboard with filters for category and date. This application is built with the **MERN** stack (MongoDB, Express, React, Node.js), making it highly scalable and efficient.

## Prerequisites

To get started, ensure that you have the following installed:

- **Node.js**: The JavaScript runtime for building and running the app.
  - [Download Node.js](https://nodejs.org/)
  
- **npm**: The package manager for JavaScript (comes with Node.js).

- **MongoDB**: The database for storing user feedback.
  - You can use **MongoDB Atlas** (cloud) or set up **MongoDB locally**.
  
---

## Set Up Environment Variables

# Backend .env File

In the backend folder, create a .env file and add the following configurations:
Replace <your-mongodb-uri> with your MongoDB connection string.
•	The default port is set to 8080, but you can adjust this if needed.

# Frontend .env File

In the frontend folder, create a .env file and add the following:

VITE_BACKEND_URL=http://localhost:8080/api/v1

## Run the Application

Backend Server
	1.	Navigate to the backend folder in your terminal.
	2.	Start the backend server using: npm run dev


Frontend Server
	1.	Open another terminal tab and navigate to the frontend folder.
	2.	Start the frontend server using: npm run dev

## Access the Application
	•	Frontend: Open your browser and go to http://localhost:5173 to interact with the user feedback form.
	•	Dashboard: Access the admin dashboard at http://localhost:5173/dashboard to view submitted feedback.

## MongoDB Connection Issues
	•	Make sure your MongoDB URI is correct in the .env file.
	•	If using MongoDB Atlas, ensure your IP address is whitelisted.
	•	If running MongoDB locally, ensure it’s running on the specified port.

## Application Not Starting
	•	Ensure you have installed dependencies by running npm install in both the frontend and backend folders.
	•	Double-check that both frontend and backend servers are running in separate terminals (npm run dev).

