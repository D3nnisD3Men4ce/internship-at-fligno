const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const protect = asyncHandler(async(req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header
            console.log("HEADERS " + req.headers.authorization);
            token = req.headers.authorization.split(' ')[1]
            console.log("TOKEN " + token);

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET) // Natypo ang secret yawa
            // console.log("DDDDDDDDDDDDECODED " + decoded);

            // Get user from token
            // console.log("REQUEST USER BEFORE" + req.user);
            req.user = await User.findById(decoded.id).select('-password')
            // console.log("REQUEST USER AFTER" + req.user);

            // Next middleware
            next()

        } catch (error) {
            console.log("ID " + req.id);
            console.log(error);
            res.status(401)
            throw new Error('Not authorized')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }

})



module.exports = {
    protect, 
}