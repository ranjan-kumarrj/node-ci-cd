// rabbitmq/rabbitmq.js
const amqp = require('amqplib');

const RABBITMQ_URL = process.env.RABBITMQ_URL || 'amqp://ranjith:Ranjith@123@localhost:5672';

async function connectQueue(queueName) {
    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue(queueName, { durable: true });
    return { connection, channel };
}

module.exports = { connectQueue };
