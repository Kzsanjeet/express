 //desc get all contact
 //@route GET /api/contacts
 //@access public
 
 const getContacts =((req,res)=>{
        res.status(200).json({message:"Get all contacts"})
    });
//desc creat all contact
//@route POST /api/contacts
//@access public

const createContact = ((req,res)=>{
    console.log("The request body is: ",req.body)
     const {name,email,phone} = req.body
     if(!name || !email || !phone){
        res.send(400)
        throw new Error("All field is mandatory.")
     }
    res.status(201).json({message:"Create all contact."})
})

//desc get all contact
//@route get /api/contacts
//@access public

const getContact = ((req,res)=>{
    res.status(201).json({message:"Create all contact."})
})

//desc get all contact
//@route get /api/contacts
//@access public

const putContact = ((req,res)=>{
    res.status(200).json({message:`Put contact for ${req.params.id}`})
})
const deleteContact = ((req,res)=>{
    res.status(200).json({message:`Delete contact for ${req.params.id}`})
})


module.exports = {getContacts,createContact,getContact,putContact,deleteContact}