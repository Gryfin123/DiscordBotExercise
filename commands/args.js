module.exports = {
	name: 'args-info',
	description: 'Info about provided arguments in message.',
	aliases: ['ai', 'args'],

	cooldown: 5,

	args: true,
	execute(message, args) {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
		else 
		if (args[0] == "foo")
		{
			return message.channel.send("bar");
		}
	
		message.channel.send(`Arguments: ${args}`);      
	},
};