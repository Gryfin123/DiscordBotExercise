module.exports = {
	name: 'console-message',
	description: 'Send message object to the console (Debug Tool)',
	aliases: ['console', 'cm'],
	
	cooldown: 5,
	execute(message, args) {
		console.log(message);
		message.channel.send("Check Console!");
	},
};