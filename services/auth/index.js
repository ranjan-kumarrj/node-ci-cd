// services/auth/index.js
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
const PORT = 3004;
const SECRET = 'mysecretkey';

app.post('/login', (req, res) => {
    const { username } = req.body;
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });
    res.json({ token });
});

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
