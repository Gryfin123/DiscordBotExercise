module.exports = {
	name: 'stop',
    description: 'If Angelotron is playing music, it makes him stop. Command in progress',
    aliases: ['morda'],

	cooldown: 5,
	execute(message, args) {
        if (dispatcher)
        {
            dispatcher.end();
        }
        else
        {
            console.log("Dispatcher is out of scope.");
        }
	},
};