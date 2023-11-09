const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Registration failed' });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: 'Login failed' });
    }
};

module.exports = {
    registerUser,
    loginUser,
};
