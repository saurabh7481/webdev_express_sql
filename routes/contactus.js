const path = require('path');
const express = require('express');

const router = express.Router();
const contactControllers = require("../controllers/contactus");

router.get('/', contactControllers.getContactUs);

router.post('/success', contactControllers.postSuccess);

module.exports = router;
