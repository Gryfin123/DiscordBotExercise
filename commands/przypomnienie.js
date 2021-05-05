module.exports = {
	name: 'przypomnienie',
	description: 'Przypomnij o nadchodzacej sesji temu kto widocznie nie potrafi o niej pamietac!',
	aliases: ['p', 'ekhem'],
	
	cooldown: 3600,
	execute(message, args) {
		if (!message.mentions.users.size) {
			try
			{
				message.channel.send(`No nie podałeś osoby ale czaje...\n Gryfin! Pragnę przypomnieć o nadchodzącej sesji! :upside_down:`);
			}
			catch( err)
			{
				return message.reply('Wspomnij komu mam to przypmnieć. Oznacz użytkownika!');
			}
		}
		else
		{
			const taggedUser = message.mentions.users.first().username;
			message.channel.send(`${taggedUser} Pragnę przypomnieć o nadchodzącej sesji! :upside_down:`);	
		}
	},
};