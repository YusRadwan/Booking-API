
const responseHandler = (res, statusCode, msg, data = null) => {
    return res.status(statusCode).json({
        msg,
        data
    });
}

module.exports = responseHandler;