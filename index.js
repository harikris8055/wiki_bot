/**
 * program to post an article message to telegram bot
 */

const TelegramBot = require('node-telegram-bot-api')
const wiki = require('./wiki')


//main 
function run() {


    //your newely created bot token here
    const bot = new TelegramBot('5131516016:AAHup8PcEj2ERwLdVc0xqjrtPn3_r4IZ-zE', { polling: true })


    bot.on('message', async (msg) => {

      var chatId = msg.chat.id;

      //calling wiki api 
      await wiki.getArticle(function (result, image) {

        // console.log(result);

        bot.sendMessage(chatId, result)
        bot.sendPhoto(chatId, image)

      })

    })

}

//calling main
run();
