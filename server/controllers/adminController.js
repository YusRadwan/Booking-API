// Libraries
    const User = require('../models/User');
    const bcrypt = require('bcryptjs');
    const crypto = require('crypto');

// Utilities
    const responseHandler = require('../../utils/responseHandler');

// Middleware
    const asyncWrapper = require('../middleware/asyncWrapper');

// Dashboard
    const dashboard = (req, res) => {
        responseHandler(res, 200, 'Admin Dashboard Page', req.user);
    }

// Update by admin
    const updateAdmin = asyncWrapper(async (req, res) => {
        // Make sure the user
            const user = await User.findById(req.params.id);
            if(!user) return res.status(404).json({msg: 'User Not Found'});

        // Hash to the password, but if it was actually sent
            const updateData = {...req.body};
            if(req.body.password) {
                updateData.password = await bcrypt.hash(req.body.password, 10);
            }

        // Update and Return data without password
            const profileUpdate = await User.findByIdAndUpdate(
                req.params.id,
                updateData,
                {new: true, runValidators: true}
            ).select('-password');
            
        responseHandler(res, 201, 'Profile  Is Updated', profileUpdate);
    });

module.exports = {
    dashboard,
    updateAdmin
}