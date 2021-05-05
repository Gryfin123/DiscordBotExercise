module.exports = {
	name: 'user-info',
	description: 'Info about you.',
	aliases: ['ui', 'user'],
	
	cooldown: 5,
	execute(message, args) {           
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	},
};