const Discord = require('discord.js');
const prefix = "." ;
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'ping') {
        message.channel.send('Pong.');
    }
    else if (command === 'sync') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
        message.delete(1000);
        message.channel.send(`=====\n<@&456550270701142058>\n\n\nSync time is out : ${args[0]}\nConfirm below if u can start or not:\n✅: YES\n❌: NO\n❕: Not sure`).then(function(message){message.react('✅')
        .then(() => message.react('❌'))
        .then(() => message.react('❕'))
        .catch(() => console.error('One of the emojis failed to react.'))});
        
    }
});


client.login(process.env.BOT_TOKEN);
