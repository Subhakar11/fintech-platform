const bcrypt = require('bcrypt');
const password = 'Am123456@'; // Replace with the password you want to hash

const hashPassword = async (password) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(`Hashed Password: ${hashedPassword}`);
};
docker run -p 8080:8080 -e HASURA_GRAPHQL_DATABASE_URL=postgres://subhakar:Am123456@@localhost:5432/fintech_db hasura/graphql-engine:v2.0.0


