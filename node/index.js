// Importing required modules
const express = require('express');
const app = express();
const cors = require('cors');

// Setting the port number
const port = 3017;

// Importing functions from routers.js file
const { getCategories, getData, getDataById } = require('./routs/routers.js');

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Define routes
app.get('/data', getData); // GET request to '/data' endpoint will execute getData function
app.get('/categories', getCategories); // GET request to '/categories' endpoint will execute getCategories function
app.get('/getObjectById/:id', getDataById); // GET request to '/getObjectById/:id' endpoint will execute getDataById function

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
