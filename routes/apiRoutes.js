const express = require('express');

const router = express.Router();
const apiController = require('../controllers/apiController');

// Define your API routes here
router.get('/', apiController.getWelcomeMessage);

// Add more routes as needed

module.exports = router;
