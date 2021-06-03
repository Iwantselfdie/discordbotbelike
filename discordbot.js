const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config()

client.on('ready', () => {
 	console.log("Bot is on!");
function infinitestatus() {
    client.user.setPresence({ activity: { name: `.help` , type: 'PLAYING' }, status: 'dnd'})
    .catch(console.error);
    setTimeout(() => {
      client.user.setPresence({ activity: { name: `i eat rocks | .help` , type: 'PLAYING' }, status: 'idle'})
      .catch(console.error);
      setTimeout(() => {
        client.user.setPresence({ activity: { name: `missed me, missed me, now u gotta kiss me (why not?) | .help` , type: 'PLAYING' }, status: 'on'})
        .catch(console.error);
        setTimeout(() => {
              infinitestatus()
            }, 1000);
          }, 5000);
        }, 5000);
  }
  console.log('Status Ready!')
  infinitestatus()
 couch = 0
 oncouch = 'No one'
});
client.on('message', msg => {
 if (msg.content.startsWith('.couch')) {
if (couch == 0) {
	msg.channel.send(msg.author.tag + ' has sat on the couch');
	couch++
	oncouch = msg.author.tag
 }
else {
if(oncouch == msg.author.tag) {
	msg.channel.send(msg.author.tag + ' has got off the couch');
	couch--
	oncouch = 'No one'
}
else {
	msg.channel.send(msg.author.tag + ' has pushed ' + oncouch + ' off the couch')
	oncouch = msg.author.tag
}
}
}
if(msg.content.startsWith('.feed')) {
	var whatEat = msg.content.replace('.feed', '')
		const feed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('yum')
		.setURL('https://www.youtube.com/watch?v=oHg5SJYRA0')
		.setFooter('i love' + whatEat);
		msg.channel.send(feed);
}
if(msg.content.startsWith('.ping')) {
	msg.react('👀')
}
if(msg.content.toLowerCase().includes('luv u') || msg.content.toLowerCase().includes('nice cock')) {
 	msg.channel.send('u too ' + msg.author.username);
}
if(msg.content.startsWith('.socials')) {
 	msg.channel.send(`haven't got socials weirdchamp, but my creator is extoplasm#0058`)
}
	var spam = false;
if(msg.content.startsWith('.help')) {
	const helpMessage = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('you asked for help?')
	.setURL('https://www.youtube.com/watch?v=oHg5SJYRHA0')
	.setDescription(`ping - see if the bot is alive
socials - socials
help - help message!
version - bot version
couch - king of the hill, but worse
oncouch - do you have less than 2 braincells, self explanatory
feed - feed me plz
richmond - bad
echo - echo
channel - creates a channel (have to specify name tho)
deleteChannel - **WARNING:** deletes the channel **you typed the message in**
steal - steal from who??? me?? don't you dare...


all the commands start with .
more soon!`);

msg.channel.send(helpMessage);
}
if(msg.content.startsWith('.pepe')) {
	msg.channel.send('<:WokePepe:750492677102895224>')
}
if(msg.content.startsWith('.version')) {
	if(msg.content.length > 8) {
		var version = msg.content.replace('.version', '')
		console.log(version)
		if(version === ' 1.0.0') {
			msg.channel.send('1.0.0, a whole new worrlllllddd')
		} else { if(version === ' 1.0.1') {
			msg.channel.send('1.0.1, dumbass owner finally found out how to use msg.react')
		} else { if(version === ' 1.0.2') {
			msg.channel.send('1.0.2, beta or sumn, channel creation and deletion added')
		} else { if(version === ' 1.0.3') {
			msg.channel.send('1.0.3, added steal, no economy, just steal...')
		} else { 
			msg.channel.send('seems like this version doesnt exist dumbass')
		}
		}
		}
		} 
	} else {
	msg.channel.send('1.0.3, added steal, no economy, just steal...')
	}
}
if(msg.content.startsWith('.oncouch')) {
	msg.channel.send(oncouch)
}
if (msg.content.startsWith('.richmond')) {
	msg.react('🤢');
}
if (msg.content.startsWith('first')) {
	msg.channel.send('shut')
}
if (msg.content.startsWith('.echo')) {
	var whatEcho = msg.content.replace('.echo', '')
	msg.channel.send(whatEcho)
	msg.delete()
}
if (msg.content.startsWith('.rockpaperscissors')) {
	msg.channel.send('send your option in chat on the count of 4')
	setTimeout(() => {
	msg.channel.send('ROCK')
		setTimeout(() => {
		msg.channel.send('PAPER')
			setTimeout(() => {
			msg.channel.send('SCISSORS')
				setTimeout(() => {
				msg.channel.send('SHOOT')
				}, 2000);
			}, 2000);
		}, 2000);
	}, 2000);
		const Responses = [
		"paper",
		"scissors",
		"rock",
		"paper",
		"rock",
		"scissors",
		"baby",
		"paper",
		"rock",
		"scissors"
	];
	const Response = Math.floor(Math.random() * Responses.length);
	setTimeout( () => {
	msg.channel.send(Responses[Response])
	}, 9000);
}
if (msg.content.startsWith('.steal')) {
	var fromWho = msg.content.replace('.steal', '')
	if (fromWho === '<@!839066354169413692>') {
		msg.channel.send(`my balls aren't getting plundered today chief`)
	} else if (fromWho.length < 1) { 
		msg.channel.send("there's no one to steal from dumbass") 
	} else if (fromWho.length < 1980) {
		const Response = Math.floor(Math.random() * 100000);
		msg.channel.send('<@!' + msg.author.id + '>')
		msg.channel.send(' stole ' + fromWho + `'s stuff`)
		msg.channel.send('totaling $' + Response)
	} else {
		msg.channel.send('name too long bro, shorten it down.')
	}
}
if (msg.content.startsWith('.channel')) {
	if (msg.member.hasPermission('CREATE_CHANNELS')) { 
		var channelName = msg.content.replace('.channel ', '') 
		msg.guild.channels.create(channelName, { reason: 'Channel created by ' + msg.author.tag }) 
		.then(console.log(`Channel created by ` + msg.author.tag + ` with the name ` + channelName))
		.catch(console.error); 
	}
}
if (msg.content.startsWith('.deleteChannel')) {
	if (msg.member.hasPermission('CREATE_CHANNELS')) { 
		msg.channel.delete()
		.then(console.log(`Channel deleted by ` + msg.author.tag + ` with the name ` + channelName))
		.catch(console.error); 
	}
}
if (msg.content.startsWith('.whatyouknowaboutrollingdowninthedeep')) {
	msg.channel.send('when your brain goes numb you call that mental freeze')
}  
if (msg.content.toLowerCase().includes('slave') || msg.content.toLowerCase().includes('forced labour') || msg.content.toLowerCase().includes('jacob')) {
 	msg.react('👀');
}
else {
	console.log(msg.author.tag + `: ` + msg.content);
}
});
client.login(process.env.token);

/// git add . , git commit -m "commit message", git push