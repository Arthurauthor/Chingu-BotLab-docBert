import Botkit from 'botkit';
import os from 'os';
import mongoose from 'mongoose';
import { API_TOKEN } from './constants';

const controller = Botkit.slackbot({
  debug: false,
});

const bot = controller.spawn({
  token: API_TOKEN,
}).startRTM();

controller.hears('hello',
  ['direct_message', 'direct_mention', 'mention'], (bot, message) => {
    bot.reply(message, 'Hello, humans!');
  });
