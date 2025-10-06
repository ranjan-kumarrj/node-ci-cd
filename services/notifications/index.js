// services/notifications/index.js
const { connectQueue } = require('../../rabbitmq/rabbitmq');

(async () => {
    const { channel } = await connectQueue('payments');
    console.log('Notifications Service connected to RabbitMQ');

    channel.consume('payments', (msg) => {
        console.log(msg);
        const payment = JSON.parse(msg.content.toString());
        console.log(`Notification: Order ${payment.orderId} payment ${payment.status}`);
        channel.ack(msg);
    });
})();
