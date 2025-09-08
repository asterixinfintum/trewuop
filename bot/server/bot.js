require("dotenv").config();
const { Telegraf } = require('telegraf');
import Subscriber from './models/subscriber';

const BOT_TOKEN = process.env.BOT_TOKEN;
const SUBSCRIBE_PASSWORD = process.env.SUBSCRIBE_PASSWORD;

const bot = new Telegraf(BOT_TOKEN);

async function sendMessageToUser(userId, message) {
  try {
    await bot.telegram.sendMessage(userId, message);
   // console.log(`Message sent to user ${userId}`);
    return { success: true };
  } catch (error) {
    console.error(`Failed to send message to ${userId}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Function to send message to all subscribers
async function sendMessageToAllSubscribers(message) {
  try {
    const subscribers = await Subscriber.find({});
    let successCount = 0;
    let failCount = 0;

    for (const subscriber of subscribers) {
      const result = await sendMessageToUser(subscriber.userId, message);
      if (result.success) {
        successCount++;
      } else {
        failCount++;
      }
      
      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return { success: true, successCount, failCount };
  } catch (error) {
    console.error('Error sending to all subscribers:', error);
    return { success: false, error: error.message };
  }
}

// Handle subscription when user sends the password
bot.on('text', async (ctx) => {
  const messageText = ctx.message.text;
  const userId = ctx.from.id;

  if (messageText === SUBSCRIBE_PASSWORD) {
    try {
      // Check if already subscribed
      const existingSubscriber = await Subscriber.findOne({ userId });
      
      if (existingSubscriber) {
        ctx.reply('You are already subscribed! ✅');
      } else {
        // Add new subscriber
        await Subscriber.create({ userId });
        ctx.reply('You have been successfully subscribed! ✅');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      ctx.reply('Error processing subscription. Please try again.');
    }
  } else {
    ctx.reply(`You sent: "${messageText}"`);
  }
});

bot.start((ctx) => {
  ctx.reply('Welcome! Send the subscription password to receive messages.');
});

bot.help((ctx) => {
  ctx.reply('Send the subscription password to become a subscriber.');
});

bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err);
  ctx.reply('Oops! Something went wrong.');
});

bot.launch().then(() => {
  console.log('Bot started successfully!');
});

// Export functions for use in Express routes
module.exports = {
  bot,
  sendMessageToUser,
  sendMessageToAllSubscribers
};

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));