const Discord = require("discord.js");
module.exports.help = {
    name: "donate",
    category: "Разработка",
description: "Выводит информацию о донате сервера дс",
usage: "[command]",
aliases: ["don"]
}
module.exports.execute = async (client, message, args) => {
//command
{
    const embed = new Discord.MessageEmbed()
      .setAuthor("💖 🅻🅴🅶🅴🅽🅳🅰 💗", 'https://cdn.discordapp.com/emojis/751110881831682191.png?v=1')
      .addField("⏭ Донат на дискорд сервере:\nДоп. уровни  \n\n      5 лвл'ов - 10 руб \n      10 лвл'ов - 25 руб.", `Пиар дс сервера\n      Без пинга [7 дней] - 90 руб. + 10 руб. пинг;\n      Без пинга [14 дней] - 250 руб. + 10 руб. пинг;\n      Без пинга [31 день] - 650 руб. + 10 руб. пинг.`)
      .addField("Особые роли:\n      @➡𝙷𝚎𝚕𝚙𝚎𝚛⬅ - 100 руб + доп комадны в боте. мес;/ 500 руб. навсегда;", `Собсвенная роль [Любой цвет + название] - 50 руб. / месяц.\n      \n      Прочее:\n      Создание дискорда по вашему желанию от 250 руб.\n      \n       ✅Важно! Вся оплата происходит строго в лс <@604313553025105930>`)
      .addField("Связь с Создателем", `ВКонтакте - https://vk.com/gasage_1841\nДискорд - <@604313553025105930>\nTelegram - Gasage`)
      .setImage(`https://foreverhoundstrust.org/wp-content/uploads/2020/02/Donate-now-button-blue.png`)
      .setColor("#6A5ACD")
      .setFooter('Пригласить бота на сервер : !invite', 'https://cdn.discordapp.com/emojis/751110881831682191.png?v=1')
      .setTimestamp()
      message.channel.send(embed)

};
}