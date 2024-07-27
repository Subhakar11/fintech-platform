const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const { HASURA_ENDPOINT, HASURA_ADMIN_SECRET } = require('../config');

const queryHasura = async (query, variables) => {
    const response = await fetch(HASURA_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
        },
        body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();
    return data;
};

module.exports = { queryHasura };
