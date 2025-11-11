// Show Data in JWT

const jwt = require('jsonwebtoken');

const authjwtMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers['authorization']; // get header value
        const token = authHeader && authHeader.split(' ')[1]; // ['bearer', 'dsfgsgnll3r342kl'] => get Just jwt Code

        if(!token) return res.status(401).json({msg: 'Token is Empty'});

        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if(err) return res.status(403).json({msg: "Token is Not Exist"}, console.log(err.message));
            req.user = user;
            next();
        });
    } catch (err) {
        return res.status(500).json({msg: `Wrong in auth JWT Function`}, console.log(err.message));
    }
}

module.exports = authjwtMiddleware;