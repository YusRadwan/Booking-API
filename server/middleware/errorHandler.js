// error Handler Middleware is Middleware for Errors
    const errorHandlerMiddle = (err, req, res, next) => {
        console.error(err.stack) // Record Error in Console

        return res.status(err.statusCode || 500).json({
            status: 'error',
            message: err.message || 'Internal Server Error'
        });
        next();
    }

module.exports = errorHandlerMiddle;