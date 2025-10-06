// api-gateway/index.js
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());
const PORT = 3000;

app.post('/orders', async (req, res) => {
    try {
        const response = await axios.post('http://localhost:3001/orders', req.body);
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
