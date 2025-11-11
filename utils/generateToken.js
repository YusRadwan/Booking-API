const jwt = require('jsonwebtoken');

const generateToken = (dataName) => {
    return jwt.sign(
            {
                userId: dataName._id, 
                userName: dataName.name, 
                userRole: dataName.role
            },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRE}
    )
}

module.exports = generateToken;