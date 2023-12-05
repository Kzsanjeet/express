 //async handler does the try catch function by it self
 const asyncHandler = require("express-async-handler")
 const Contact = require("../models/contactModels")
 //desc get all contact
 //@route GET /api/contacts
 //@access public
 
 const getContacts = asyncHandler(async(req,res)=>{
    const contacts = await Contact.find()
    res.status(200).json(contacts)
    });
//desc creat all contact
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async(req,res)=>{
    console.log("The request body is: ",req.body)
     const {name,email,phone} = req.body
     if(!name || !email || !phone){
        res.status(200)
        throw new Error("All field is mandatory.")
        // res.json("Invalid credientals...")
     }
     const contact = await contact.create(
        {
            name,
            email,
            phone
        })
    res.status(201).json(contact)
})

//desc get all contact
//@route get /api/contacts
//@access public

const getContact = asyncHandler(async(req,res)=>{
    res.status(201).json({message:"Create all contact."})
})

//desc get all contact
//@route get /api/contacts
//@access public

const putContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Put contact for ${req.params.id}`})
})
const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
})


module.exports = {getContacts,createContact,getContact,putContact,deleteContact}