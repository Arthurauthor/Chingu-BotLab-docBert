import Botkit from 'botkit';
import os from 'os';
import mongoose from 'mongoose'; // for interacting with a mongoDB database
import { API_TOKEN } from './constants'; // import your Slack token from another location.

const controller = Botkit.slackbot({
  debug: false,
});

const bot = controller.spawn({
  token: API_TOKEN, // Token is used here
}).startRTM();

controller.hears('hello',
  ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
    bot.reply(message, 'Hello, humans!');
  });
