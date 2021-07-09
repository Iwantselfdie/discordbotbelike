const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config()

client.on('ready', () => {
 	console.log("Bot is on!");
function infinitestatus() {
    client.user.setPresence({ activity: { name: `for .help` , type: 'WATCHING' }, status: 'dnd'})
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
if (msg.content.startsWith('.feed')) {
	var whatEat = msg.content.replace('.feed', '')
	if (whatEat === ('') || whatEat === (' ')) {
		msg.channel.send(`bro you can't feed me nothing are you dumb i have to eat im a hungry and growing bot`)
	} else {
		const feed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('yum')
		.setURL('https://www.youtube.com/watch?v=oHg5SJYRA0')
		.setFooter('i love' + whatEat);
		msg.channel.send(feed);
	}
}
if (msg.content.startsWith('.ping')) {
	msg.react('👀')
}
if (msg.content.toLowerCase().includes('luv u') || msg.content.toLowerCase().includes('nice cock')) {
 	msg.channel.send('u too ' + msg.author.username);
}
if (msg.content.startsWith('.creator')) {
 	msg.channel.send(`my creator is エクトプラズム#0058`)
}
	var spam = false;
if (msg.content.startsWith('.help')) {
	const helpMessage = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('you asked for help?')
	.setURL('https://www.youtube.com/watch?v=oHg5SJYRHA0')
	.setDescription(`ping - see if the bot is alive
creator - who made me? 
help - help message!
version - bot version
couch - king of the hill, but worse
oncouch - do you have less than 2 braincells, self explanatory
feed - feed me plz
richmond - bad
echo - echo
steal - steal from who??? me?? don't you dare...
avatar - shows ur avatar


all the commands start with .
more soon!`);

msg.channel.send(helpMessage);
}
if (msg.content.startsWith('.pepe')) {
	msg.channel.send('<:WokePepe:750492677102895224>')
}
if (msg.content.startsWith('.version')) {
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
		} else { if(version === ' 1.0.4') {
			msg.channel.send(`1.0.4, pog added .avatar, definitely didn't copy from discord.js`)
		}
		else { if(version === ' list') {
			msg.channel.send('1.0.0, 1.0.1, 1.0.2, 1.0.3, 1.0.4 (current)')
		} else { 
			msg.channel.send('seems like this version doesnt exist dumbass')
		}
		}
		}
		}
		}
		} 
	} else {
	msg.channel.send(`1.0.4, pog added .avatar, definitely didn't copy from discord.js`)
	}
}
if (msg.content.startsWith('.oncouch')) {
	msg.channel.send(oncouch)
}
if (msg.content.startsWith('.richmond')) {
	msg.react('🤢');
}
if (msg.content === 'first') {
	msg.channel.send('shut')
}
if (msg.content.startsWith('.echo')) {
	var whatEcho = msg.content.replace('.echo', '')
	if (msg.content.length < 7) {
		msg.channel.send('actually put something in that i should echo, are you dumb? do you think i have super dooper magical powers that will echo what you have in mind? are you ok sir.')
	} else if (msg.author.id === '520905600184483850' || msg.author.id === '758595526370787330') {
		msg.channel.send('haha echo perms removed')
	} else {
	msg.channel.send(whatEcho)
	msg.delete()
	}
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
	if (fromWho === ' <@!839066354169413692>') {
		msg.channel.send(`my loot isn't getting plundered today chief`)
	} else if (fromWho === ' <@!697281718419193896>') {
		msg.channel.send(`owner is immune to this type of scum`)
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
if (msg.content.startsWith('.avatar')) {
	msg.channel.send('Your avatar: ' + msg.author.displayAvatarURL({ format: 'png', dynamic: false }));
}
if (msg.content.startsWith('.whatyouknowaboutrollingdowninthedeep')) {
	msg.channel.send('when your brain goes numb you call that mental freeze')
}
if (msg.content.toLowerCase().includes('what do you know about rollign down in the deep') || msg.content.toLowerCase().includes('what do you know about rolling down in the deep')) {
	msg.reply('a lot.')
	msg.react('😳')
}
if (msg.content.toLowerCase().includes('slave') || msg.content.toLowerCase().includes('forced labour') || msg.content.toLowerCase().includes('jacob')) {
 	msg.react('👀');
}
if (msg.content.toLowerCase().includes('.feed rocks')) {
	msg.react('😋')
}
if (msg.content.startsWith('.easteregg')) {
	msg.channel.send('me when easter egg lmao')
	msg.react('🥚')
}
if (msg.content.startsWith('.test')) {
	msg.channel.send('you found an easter egg! this only works once in a while!')
}
if (msg.content.startsWith('.rjfdksla;jfkl;jekwlq;jkldf;jsakl;s')) {
	const rulesCringe = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('rules')
	.setURL('https://www.youtube.com/watch?v=oHg5SJYRHA0')
	.setDescription(`1.  No Spamming and keep low effort to a minimum.
Spamming includes, but is not limited to: sending too many messages in quick succession, sending nonsensical/pointless messages, reaction spamming, abusing link embeds to flood chat, and making noise with the purpose of disrupting a conversation in voice chat. 

While we do not mind occasional out of the blue jokes or low effort posts that aren't relevant, please keep it to a minimum as we like to keep the chat quality to a certain level, this includes but is not limited to: Frequently reposting the same image, meme, video, phrase, or alteration of.

2. No Harassment/Toxicity
Toxicity is intolerable both in text and voice chat. This also includes, but is not limited to: trolling, doxxing, use of words in a derogatory way, condescending behavior and failure to respect another member's boundaries. Be constructive and civil with criticism. Do not bash (insulting things, calling things trash and personal attacks). Critique should contain substance on how to improve. Bashing a person's work, server features and decisions is demeaning and will not be tolerated.

3. Keep Advertising to a Minimum
Posting your own videos or content every now and then is fine, as long as it is posted in the respective channel. Take care not to overdo it.

4. No 18+ Content/Conversations
Do not post anything unsuitable for people under the age of 18. Mild profanity is allowed but try to keep it to a minimum. This applies to profile pictures, usernames, nicknames, statuses, images, and discussions in both text and voice chat.
`);
	const rulesCringe2bruh = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('rules')
	.setURL('https://discord.com/channels/@me/')
	.setDescription(`5. No Raiding/Brigading
Raiding other servers is unacceptable and we heavily discourage it. Raiding consists of, but is not limited to: joining a server with the explicit purpose of breaking its rules and/or attempting to taunt/annoy any of its users or staff, as well as attempting to encourage other users to raid.
 
6. Use Channels For Their Intended Purposes
Most channel names are self explanatory on what content they should contain.

7. No Evading Punishment
Do not attempt to evade punishment. If you believe you were punished unjustly, contact me or a mod

8. Follow Discord's Terms of Service
We are required to punish users caught breaking Discord's Terms of Service. It would be wise to make sure you've read through them at https://discord.com/terms

9. What the Staff Say is Final
If a staff member warns you to stop something, don't argue with them. If you have a complaint about a staff member abusing their powers, privately message a community manager with any available evidence. 

10. English Only
This is an English speaking Discord. For the sake of moderation, users speaking any language other than English will be asked to stop. memes and other jokes are allowed
 
Lastly, **don't be an asshole**

**Thanks, - Red**`);
	msg.channel.send(rulesCringe);
	msg.channel.send(rulesCringe2bruh);
}
else {
	console.log(msg.author.tag + `: ` + msg.content);
}
});
client.login(process.env.token);

/// git add . , git commit -m "commit message", git push