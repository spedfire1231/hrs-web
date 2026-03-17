const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Mock database
const users = new Map();

// Register function
const register = async (req, res) => {
    const { username, password } = req.body;
    if (users.has(username)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users.set(username, { password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
};

// Login function
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = users.get(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' }); // Use environment variable in production
    res.status(200).json({ token });
};

// Logout function
const logout = (req, res) => {
    // In a real application, you would handle token invalidation
    res.status(200).json({ message: 'Logged out successfully' });
};

module.exports = { register, login, logout };