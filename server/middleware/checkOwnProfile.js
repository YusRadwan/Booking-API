
const checkOwnProfile = (req, res, next) => {
    // Get the ID from URL params and user ID from JWT token
        const requestedUserId = req.params.id;
        const loggedInUserId = req.user.userId;

    // Check if user is trying to update their own profile
        if (requestedUserId !== loggedInUserId) {
            return res.status(403).json({
                msg: "You can only update your own profile"
            });
        }

    // If it's their own profile, allow the request to continue
        next();
}

module.exports = checkOwnProfile;