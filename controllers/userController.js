const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
 //desc register a user
 //@route POST /api/registers
 //@access public
 
//  const registerUser = asyncHandler(async(req,res)=>{
//     const {username,email,password} = req.body;
//     if(!username || !email || !password){
//         res.status(400);
//         throw new Error('All fields are mandatory!')
//     }
//     //check if the email is already in use
//     try {
//         const userInUse = await User.findOne({ email: email });
//         if (userInUse) {
//             res.status(400).json({ error: 'User already registered!' });
//         } else {
//             // Proceed with user registration
//               // create Hash password
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is just the number of salt rounds that we want for the hashing of the password
//     //console.log("hashed password:", hashedPassword); // Check the value here
//     const user = await User.create({ //creating the user registration model
//         username,
//         email,
//         password :await bcrypt.hashedPassword,
//     })
//     console.log(`user created ${user}`)
//     if (user){// using if else so that we donot send the password
//         res.status(201).json({_id:user.id,email:user.email})
//     }else{
//         res.status(400);
//         throw new error("User data is not valid")
//     }
//     res.json({ message: "Register the user" });
//         }
//     } catch (error) {
//         // Handle any errors that occurred during User.findOne
//         res.status(500).json({ error: 'Internal server error' });
//     }
// })

const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are mandatory!');
    }
    try {
        const userInUse = await User.findOne({ email: email });
        if (userInUse) {
            res.status(400).json({ error: 'User already registered!' });
        } else {
            // Proceed with user registration
            const hashedPassword = await bcrypt.hash(password, 10);

            const user = await User.create({
                username,
                email,
                password: hashedPassword, // Corrected the assignment here
            });

            console.log(`user created ${user}`);
            if (user) {
                res.status(201).json({ _id: user.id, email: user.email });
            } else {
                res.status(400);
                throw new Error("User data is not valid");
            }
            // Moved the response here, after creating the user
            // res.json({ message: "Register the user" }); - Removed this line
        }
    } catch (error) {
        // Handle any errors that occurred during User.findOne or user creation
        res.status(500).json({ error: 'Internal server error' });
    }
});


 //desc login a user
 //@route POST /api/user/login
 //@access public
 
 const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"Login a user"});
    const{email,password}=req.body;
    //validate inputs
    if(!email || !password){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
})

//desc current user info
 //@route POST /api/user/current
 //@access private
 
 const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"Current user info"});
})

module.exports = {registerUser,loginUser,currentUser};