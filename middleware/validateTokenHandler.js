const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
    // let token;
    // let authHeader = req.headers.Authorization || req.headers.authorization;
    
    // if (authHeader && authHeader.startsWith("Bearer")) {
     const  {token} = req.cookies// Split by space to get the token
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(401);
                throw new Error("User is not authorized");
            }
            // If token is valid, attach decoded data to the request (optional)
            req.user = decoded;
            next(); // Call next() to pass control to the next middleware
        })
    });
        //  else {
        // res.status(401);
        // throw new Error("No token found");
module.exports = validateToken;
