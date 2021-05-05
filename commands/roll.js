module.exports = {
	name: 'roll',
	description: 'Roll a dice. Example: (1d20, 3d100, 8d6, ...)!',
	aliases: ['r'],
	
	cooldown: 5,

	args: true,
	usge: "<amount dice>d<dice size>",
	execute(message, args) {
		
		const RollingGuy = require("../include/roll.js");
		const rollingGuy = new RollingGuy();
		
		if (!args.length) {
			return message.channel.send(`You didn't provide any dice, ${message.author}!`);
		}


		try {
			//let pattern = /\d+d\d+/i; 
			//let result = args[0].match(pattern); 

			let gettingData = args[0].split("d");
			let diceAmount = gettingData[0];
			let diceSize = gettingData[1];

			let result = rollingGuy.rollDie(diceAmount, diceSize);
			let resultString = rollingGuy.showRoll(result);

			message.channel.send(resultString);
		}
		catch(err) {
			console.log("Command Failed!\n" + err);  
		}
	},
};