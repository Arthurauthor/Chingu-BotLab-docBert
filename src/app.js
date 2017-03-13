import Botkit from 'botkit';
import os from 'os';
import mongoose from 'mongoose';
import { API_TOKEN } from './constants';

// connect to local database
mongoose.connect('mongodb://127.0.0.1:27017/docBertDB');

// initialize a mongoDB collection
const reference = mongoose.model('reference',
                                  { 
                                    filename: 'string', // example schema
                                    url: 'https://s3.amazon.com/926ibCU212/', // example schema
                                  }
                                )

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
