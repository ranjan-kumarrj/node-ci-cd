// services/orders/index.js
const express = require('express');
const { connectQueue } = require('../../rabbitmq/rabbitmq');

const app = express();
app.use(express.json());
const PORT = 3001;

let channel;

(async () => {
    const result = await connectQueue('orders');
    channel = result.channel;
    console.log('Orders Service connected to RabbitMQ');
})();

app.post('/orders', async (req, res) => {
    const order = req.body;
    await channel.sendToQueue('orders', Buffer.from(JSON.stringify(order)), { persistent: true });
    res.json({ message: 'Order placed successfully!', order });
});

app.listen(PORT, () => console.log(`Orders Service running on port ${PORT}`));
