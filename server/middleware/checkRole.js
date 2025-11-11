
// Higher-Order Middleware
    const checkRole = (authRole) => {
        return (req, res, next) => {
            const isSameUser = req.params.id == req.user.userId;
            const hasRole = req.user.userRole === authRole
            if (!isSameUser && !hasRole) {
                return res.status(403).json({msg: "Forbidden Role", user: req.user});
            }
            next();
        }
    }

module.exports = checkRole;