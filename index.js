const express = require('express');
const errorHandler = require("./middleware/errorHandler")
const app = express();
// const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

console.log("Hello world");

// Middleware for easy parsing of JSON data
// app.use(express.json());
app.use(express.json())
app.use("/",require("./routes/contactRoutes"))
app.use(errorHandler)
// Connect to MongoDB
// mongoose.connect("mongodb+srv://username:password@cluster0.la8y0ow.mongodb.net/learning", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });


// mongoose.connection.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// mongoose.connection.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// Routes
// app.get("/", (req, res) => {
//   res.status(200).json({message:"Hello world! This is my first express"});
// });

// we can also send response i.e res in json format by res.json({})

// For server listening
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`The server is listening on port ${port}.`);
})