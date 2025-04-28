const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.DATABASE_URL;

exports.coonnectDB = async () => {
    await mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.log('DB connection Failed!!');
        console.error('Database connection error:', error);
        process.exit(1); // Exit the process with failure
    }); 
}