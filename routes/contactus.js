const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
});

router.post('/success', (req, res, next) => {
  res.send("<h1>Successful</h2>");
});

module.exports = router;
