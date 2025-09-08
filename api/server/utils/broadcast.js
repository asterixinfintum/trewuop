require("dotenv").config();

import axios from 'axios';

const BROADCAST_SERVER_URL = `${process.env.TBOT_SERVER}/broadcast`;

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

export async function sendBroadcastToSubscribers(message, retries = MAX_RETRIES) {
    try {
        const response = await axios.post(BROADCAST_SERVER_URL, {
            message: message
        }, {
            headers: {
                'Content-Type': 'application/json'
            },
            timeout: 10000 // 10 second timeout
        });

        console.log('✅ Broadcast sent successfully:', response.data);
        return { success: true, data: response.data };

    } catch (error) {
        if (retries > 0) {
            console.log(`⚠️  Broadcast failed, retrying... (${MAX_RETRIES - retries + 1}/${MAX_RETRIES})`);
            await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
            return sendBroadcastToSubscribers(message, retries - 1);
        }

        console.error('❌ Failed to send broadcast after retries:', error.response?.data || error.message);

        // Don't fail the main request if broadcast fails
        return {
            success: false,
            error: error.response?.data || error.message,
            nonCritical: true // Indicates this shouldn't fail the main operation
        };
    }
}