const Discord = require("discord.js");


module.exports.help = {
    name: "info",
    category: "Разработка",
description: "Выводит информацыю",
usage: "[command]",
aliases: ["i"]
}
module.exports.execute = async (client, message, args) => {
//command
{
const ihatekids = new Discord.MessageEmbed()
      .addField("[LegendaProject]", `**Ip Серверов**`)
      .addField("**CS:GO**", `Awp - В разработке \nJail - В разработке`)
      .addField("Связь с Администрацией", `ВКонтакте - https://vk.com/gasage_1841\nДискорд - <@604313553025105930>\nTelegram - Gasage`)
      .addField("Сайт проекта", `В разработке`)
      .addField("Группы", `:new_moon:Дискорд Группа https://discord.gg/6vzntay \n:white_check_mark:Вк Группа https://vk.com/legendaproject1 \n:thumbsup:Телеграм https://t.me/legendaprojectru1`)
      .addField("Чтобы получить какуето роль вам нужно добится определьоного уровня.", `**Чтобы получить роли нужно:\n 🎀Крутой :)🎀 Нужно добится 5 уровня \n🐲Хитрюга🐲 нужно добится 10 уровня\n🏆Бывалый🏆 нужно добится 15 уровня\n🎇Опытный✨ нужно добится 20 уровня\n👑Легенда👑 нужно добится 30 уровня\n🤑SHOP🤑 нужно добится 40 уровня\n🤑CREDITS🤑 нужно добится 45 уровня\n🐺supreme🐺 нужно добится 50 уровня\n⌚Активный⌚ нужно добится 60 уровня**`)
      .setColor("#6A5ACD")
      .setFooter('Пригласить бота на сервер : !invite', 'https://cdn.discordapp.com/emojis/751110881831682191.png?v=1')
      .setTimestamp()
  message.channel.send(ihatekids)

};
}