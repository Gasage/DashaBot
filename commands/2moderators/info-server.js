const Discord = require("discord.js");


module.exports.help = {
    name: "info-server",
    category: "Разработка",
description: "Выводит информацыю о сервер legendaBot",
usage: "[command]",
aliases: ["i-s"]
}
module.exports.execute = async (client, message, args) => {
//command
{
const ihatekids = new Discord.MessageEmbed()
      .setAuthor("Сервер подержки DashaBot", 'https://cdn.discordapp.com/attachments/702131659092394005/760851411100631040/images_1.jpg')
      .setTitle("Привет! Добро пожаловать на сервер поддержки и сообщества пользователей!")
      .addField('Здесь вы можете найти много полезной информации по использованию бота', `получить ответы на возникшие вопросы и просто пообщаться в рамках установленных ниже правил.`)
      .addField("Язык бота на сервере — русский со стандартным префиксом !. \nДля получения списка команд используйте команду !help.", 'На возникшие вопросы Вам могут ответить в канале #┊🗯┊𝙷𝚎𝚕𝚙 ребята из поддержки <@&751725559062724654> и просто опытные рядовые пользователи.\nПожалуйста, для ознакомления с командами бота используйте канал\n#┊🤖┊bot-commands, остальные каналы необходимо держать в чистоте.')
      .setColor("#6A5ACD")
      .setFooter('Вступить на сервер подержки бота : !invite', 'https://cdn.discordapp.com/attachments/702131659092394005/760851411100631040/images_1.jpg')
      .setTimestamp()
  message.channel.send(ihatekids)

};
}