// Import 
    const express = require("express");
    const cors = require('cors');
    const dotenv = require("dotenv").config();
    
    const startServer = require("./config/start.server");
    const responseHandler = require('./utils/responseHandler');
    const errorHandlerMiddle = require("./server/middleware/errorHandler");

// Start App
    const app = express();

// Meddilware
    app.use(cors({ // The Browser Refusal Any HTTP Request from Different Origin 
        origin: "http://localhost:3000"
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));


// Route
    app.use('/api/users', require('./server/routes/userRoutes'));
    app.use('/api/admin', require('./server/routes/adminRoutes'));

// Route Handler Middleware
    app.all('/*splat', (req, res, next) => {
        responseHandler(res, 404, 'Route is Not Found');
    });

// Error Handler Middleware
    app.use(errorHandlerMiddle);

// Run Server
    startServer(app);