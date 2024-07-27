const { queryHasura } = require('../services/hasuraService');

const createTransaction = async (userId, amount, type) => {
    const mutation = `
        mutation createTransaction($userId: Int!, $amount: numeric!, $type: String!) {
            insert_transactions_one(object: {user_id: $userId, amount: $amount, type: $type}) {
                id
                amount
                type
                timestamp
            }
        }
    `;
    const variables = { userId, amount, type };
    const response = await queryHasura(mutation, variables);
    return response.data.insert_transactions_one;
};

// Add other transaction-related functions as needed

module.exports = { createTransaction };
