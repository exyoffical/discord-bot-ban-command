module.exports = {
    kod: "ban",
    async run (client, message, args) {
      const args1 = message.content.split(' ').slice(2)
      const neden = args1.join(" ")
      const { MessageEmbed } = require('discord.js')
      const user = message.mentions.users.first();
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**Banlama yetkin yok**');
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .ban({
            reason: 'Sunucudan !ban komutu ile banlandı!',
          })
          .ban('Sunucudan !ban komutu ile atıldı')
          .then(() => {
            const kanal = message.guild.channels.cache.find(ch => ch.name === 'log-kanalı')
            const embed = new MessageEmbed()
            .setTitle('LOG OLAYI')
            .setDescription('Olay: `Ban`')
            .addField('Kişi:', member)
            .addField('Neden', neden)
            kanal.send(embed)
          })
          .catch(err => {
            message.reply('Bu kişiyi banlandı!');
            console.error(err);
          });
      } else {
        message.reply("Bu kişi sunucuda yok!");
      }
    } else {
      message.reply("Bu kişiyi banlayamazsın!");
    }
   }
  }
