const express = require('express');
const { deposit } = require('../controllers/transactionController');
const router = express.Router();

router.post('/deposit', deposit);

// Add other transaction-related routes as needed

module.exports = router;
