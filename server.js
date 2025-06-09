const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// require('dotenv').config(); // To access environment variables from .env

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
// Connect to MongoDB
// mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Add this to server.js
// app.get('/todos', async (req, res) => {
//     // const todos = await Todo.find();
//     const todos = "value in server.js";
//     res.json(todos);
// });

// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});