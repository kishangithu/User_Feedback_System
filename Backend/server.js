const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;
const database = require('./Config/database');
const routes = require('./Routes/feedbackRoutes');

const cors = require('cors');
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//DB connection establishment
database.coonnectDB();

//Middleware
app.use(express.json());

//Routes
app.use('/api/v1',routes);
app.use(cors());


//Default route
app.get('/', (req, res) => {
  return res.json({
    success: true,
    message: 'The server is up and running',
  });
});

app.listen(PORT, () => {
    console.log(`App is running at : ${PORT}`);
});