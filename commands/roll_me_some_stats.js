module.exports = {
	name: 'roll-me-some-stats',
	description: 'Roll me a character stats. (~~Zrobione troche na odpierdol~~ Still in development)',
	aliases: ['rmss', 'stats'],
	
	cooldown: 5,
	execute(message, args) {
		
		const RollingGuy = require("../include/roll.js");
		const rollingGuy = new RollingGuy();
		
		message.channel.send(rollingGuy.rollMeSomeStats());		
	},
};