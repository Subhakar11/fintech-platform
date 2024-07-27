const bcrypt = require('bcrypt');
const { getUserByEmail } = require('../models/user');

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await getUserByEmail(email);

    if (user && bcrypt.compareSync(password, user.password)) {
        res.status(200).json({ message: 'Login successful', user });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

module.exports = { login };
