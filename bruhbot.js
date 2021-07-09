const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config()

client.on('ready', () => {
 	console.log("Bot is on!");
function infinitestatus() {
    client.user.setPresence({ activity: { name: `ok` , type: 'PLAYING' }, status: 'dnd'})
    .catch(console.error);
    setTimeout(() => {
      client.user.setPresence({ activity: { name: `cheese` , type: 'WATCHING' }, status: 'idle'})
      .catch(console.error);
      setTimeout(() => {
        client.user.setPresence({ activity: { name: `lol you found a easter egg version of me` , type: 'PLAYING' }, status: 'on'})
        .catch(console.error);
        setTimeout(() => {
              infinitestatus()
            }, 1000);
          }, 5000);
        }, 5000);
  }
  console.log('Status Ready!')
  infinitestatus()
});

client.on('message', async msg => {
if (msg.content.startsWith('.test')) {
	const connection = await msg.member.voice.channel.join().then(connection => {
        // Yay, it worked!
        console.log("Successfully connected.");
    }).catch(e => {

        // Oh no, it errored! Let's log it to console :)
        console.error(e);
    });
}
else {
	console.log(msg.author.tag + `: ` + msg.content);
}
});
client.login(process.env.token);