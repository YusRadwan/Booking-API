// Library
    const express = require('express');
    const router = express.Router();

// Files
    const userController = require('../controllers/userController');

// Middleware
    const authjwtMiddleware = require('../middleware/authjwt');
    const checkRole = require('../middleware/checkRole');
    const checkOwnProfile = require('../middleware/checkOwnProfile');

// Register New User
    router.post('/register', userController.registerUser);

// Login user
    router.post('/login', userController.loginUser);

// All
    router.get('/all', authjwtMiddleware, checkRole('admin'), userController.getAllUser);

// Profile
    router.get('/profile', authjwtMiddleware, userController.getProfile);

// Update
    router.put('/:id', authjwtMiddleware, checkOwnProfile, userController.updateUser);

// Delete
    router.delete('/:id', authjwtMiddleware, checkRole('admin'), userController.deleteUser);

// Forgot Password
    router.post('/forgotPassword', userController.forgotPassword);

// Reset Password
    router.post('/resetPassword/:resetToken', userController.resetPassword);

module.exports = router;