const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password, items } = req.body;
        const user = new User({ name, email, password, items });
        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
});

module.exports = router;
