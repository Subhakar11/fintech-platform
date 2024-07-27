const { createTransaction } = require('../models/transaction');

const deposit = async (req, res) => {
    const { userId, amount } = req.body;
    const transaction = await createTransaction(userId, amount, 'deposit');
    res.status(201).json(transaction);
};

// Add other transaction-related controllers as needed

module.exports = { deposit };
