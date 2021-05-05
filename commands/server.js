module.exports = {
	name: 'server-info',
	description: 'Info about server.',
	aliases: ['si', 'server'],
	
	cooldown: 5,
	execute(message, args) {            
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};