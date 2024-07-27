const { queryHasura } = require('../services/hasuraService');

const getUserByEmail = async (email) => {
    const query = `
        query getUserByEmail($email: String!) {
            users(where: {email: {_eq: $email}}) {
                id
                username
                email
                password
                balance
            }
        }
    `;
    const variables = { email };
    const response = await queryHasura(query, variables);
    return response.data.users[0];
};

// Add other user-related functions as needed

module.exports = { getUserByEmail };
