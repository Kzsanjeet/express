const express = require('express');
const router = express.Router();
const {getContacts, getContact,putContact,deleteContact} = require("../controllers/contactController")
const {createContact} = require("../controllers/contactController")

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).put(putContact).delete(deleteContact);
module.exports = router;