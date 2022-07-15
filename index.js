const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const dotenv = require('dotenv'); 
dotenv.config();


client.on('ready', () => {
    console.log(`${client.user.tag} 사용자가 로그인하였습니다.`);
  
  });

  
client.on('messageCreate', msg => {

    try { 
        if (msg.content === process.env.PREFIX + 'call') msg.channel.send(`!callback`);

        if (msg.content === process.env.PREFIX + 'avatar') msg.channel.send(msg.author.displayAvatarURL());
        
        if(msg.content === process.env.PREFIX + 'help') {
            const embed = new Discord.MessageEmbed()
            .setTitle("도움말")
            .setColor('000') 
            .setDescription('디스코드봇 테스트입니다.');

            msg.reply({ embeds: [embed] })
        }

        if(msg.content === process.env.PREFIX + 'server') {
            msg.channel.send(`현재 서버의 이름은 ${msg.guild.name} 입니다.\n총 멤버 수는 ${msg.guild.memberCounts} 명 입니다.`)
          }

        console.log(msg.content)
    } catch (e) {
        console.log(e);
    }
    
});


client.login(process.env.TOKEN);