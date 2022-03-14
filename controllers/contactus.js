const rootDir = require('../utils/path');
const path = require("path");

exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
}

exports.postSuccess = (req, res, next) => {
    res.send("<h1>Successful</h2>");
}