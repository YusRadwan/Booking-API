// Library
    const express = require('express');
    const router = express.Router();

// File
    const adminController = require('../controllers/adminController');

// Middleware
    const authjwtMiddleware = require('../middleware/authjwt');
    const checkRole = require('../middleware/checkRole');


// Dashboard
    router.get('/dashboard', authjwtMiddleware, checkRole('admin'), adminController.dashboard);

// Update
    router.put('/:id', authjwtMiddleware, checkRole('admin'), adminController.updateAdmin);

module.exports = router;