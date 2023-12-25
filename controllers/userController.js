const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const bcrypt = require("bcrypt")
 //desc register a user
 //@route POST /api/registers
 //@access public
 
 const registerUser = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error('All fields are mandatory!')
    }
    //check if the email is already in use
    const userInUse= await User.findOne({email:email})
    if(userInUse){
        res.status(400);
        throw new Error('User already registered!')
    }
    // create Hash password
    const hashedPassword = await bcrypt.hash(password,10)
    console.log(hashedPassword)
    res.json({message:"Register the user"});

})

 //desc login a user
 //@route POST /api/user/login
 //@access public
 
 const loginUser = asyncHandler(async(req,res)=>{
    res.json({message:"Login a user"});
})

//desc current user info
 //@route POST /api/user/current
 //@access private
 
 const currentUser = asyncHandler(async(req,res)=>{
    res.json({message:"Current user info"});
})

module.exports = {registerUser,loginUser,currentUser};
