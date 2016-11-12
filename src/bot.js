'use strict';

const TelegramSDK   = require('./telegramSDK');
const LuisSDK = require('./luisSDK');

let telegramToken = process.env.TELEGRAM_BOT_TOKEN || '';
let luisToken = process.env.LUIS_TOKEN || '';
let luisKey = process.env.LUIS_SUBSCRRIPTION_KEY || '';

let bot = new  TelegramSDK(telegramToken);
let luis = new LuisSDK(luisToken, luisKey);

bot.on('message', (message) => {

    let chatId = message.chat.id;
    let encodedText = encodeURI(message.text);
    let user = message.from.username || message.from.first_name;

	

    let msg = `${user} send the message:: ${text}` ;

    bot.sendMessage(chatId,msg);

});

bot.on('error', (message) => {

    let errorMsg = 'Error in request:' + message;
    let chatTestId = '-178955930';

    bot.sendMessage(chatTestId, errorMsg);

});

//luis.on('message', (message) => )


module.exports = bot;


