'use strict';

var _botkit = require('botkit');

var _botkit2 = _interopRequireDefault(_botkit);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _constants = require('./constants.js');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import your Slack token from another location.

var controller = _botkit2.default.slackbot({
  debug: false
}); // for interacting with a mongoDB database


var bot = controller.spawn({
  token: _constants2.default }).startRTM();

controller.hears('hello', ['direct_message', 'direct_mention', 'mention'], function (bot, message) {
  bot.reply(message, 'Hello, humans!');
});
//# sourceMappingURL=app.js.map