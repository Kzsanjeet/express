const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,"Please add the contact name"],
    },
    email:{
        type:String,
        required:[true,"Please add the contact email"],
    },
    phone:{
        type:Number,
        required:[true,"please add the contact phone number"],
    },
},{
    timestamps: true  //this will create createdAt and updatedAt field in our schema automatically
})

module.exports = mongoose.model("Contact",contactSchema)