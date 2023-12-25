//  //async handler does the try catch function by it self
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

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is: ", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400); // Change the status to 400 for bad request
        throw new Error("All fields are mandatory.");
    }
    try {
        const contact = await Contact.create({
            name,
            email,
            phone,
        });
        res.status(201).json(contact);
    } catch (error) {
        // Handle any potential errors during Contact creation
        res.status(500).json({ error: error.message });
    }
});



//desc get all contact
//@route get /api/contacts
//@access public


const getContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            res.status(404).json({ error: "Contact not found." });
        } else {
            res.status(200).json(contact);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error in retrieving data' });
    }
});


//desc update contact
//@route put /api/contacts
//@access public

const putContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({ error: "Contact not found." });
        }

        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({ error: 'Error in updating contact' });
    }
});

// In Mongoose, the remove() function may not be available directly on the document if you're using a newer version.
//Instead, you should use deleteOne() or findByIdAndDelete() methods provided by Mongoose to delete the document from the database.
const deleteContact = asyncHandler(async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) {
            return res.status(404).json({ error: "Contact not found." });
        }
        await Contact.deleteOne({ _id: req.params.id }); // Use deleteOne to remove the contact
        res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error in deleting contact' });
    }
});

module.exports = {getContacts,createContact,getContact,putContact,deleteContact}