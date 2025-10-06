// services/payments/index.js
const { connectQueue } = require('../../rabbitmq/rabbitmq');

(async () => {
    const { channel } = await connectQueue('orders');
    const paymentsQueue = await connectQueue('payments');
    console.log('Payments Service connected to RabbitMQ');

    channel.consume('orders', async (msg) => {
        const order = JSON.parse(msg.content.toString());
        console.log(`Processing payment for order ${order.id}`);

        const payment = { orderId: order.id, status: 'success' };
        await paymentsQueue.channel.sendToQueue('payments', Buffer.from(JSON.stringify(payment)), { persistent: true });
        channel.ack(msg);
    });
})();
