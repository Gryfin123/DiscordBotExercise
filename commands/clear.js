module.exports = {
	name: 'clear',
	description: 'Delete last 100 messages sent by Angelotron. Currently Disabled',
	aliases: ['c'],
	
	cooldown: 5,
	execute(message, args) {
		/*
		-- Temporary disabled --
		probably not neccesary anyway

		message.channel.fetchMessages({limit: 100})
		.then(function(messages) 
		{
			console.log("Im in!");
			//console.log(messages);

			messages.every(function(currMessage) 
			{ 
				console.log("- Working it!");
				console.log(currMessage);
				// console.log(currMessage.author.id);
				// if (currMessage.author.id === '430825955012116511')
				// {
				//     console.log("--- Found him!!!");
				//     currMessage.delete()
				//     .then(msg => console.log(`Deleted message from ${msg.author.username}`))
				//     .catch(console.error);
				// }
			}); 
			console.log("Cleaning up.");            
		})
		.catch(console.error);
		//*/
	},
};