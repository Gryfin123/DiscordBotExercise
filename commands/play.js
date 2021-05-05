module.exports = {
	name: 'play',
    description: 'If Angelotron is on a voice channel, he\' play something nice',
    aliases: ['spiewaj'],

	cooldown: 5,
	execute(message, args) {

        let connection = message.guild.voiceConnection;
        if (!connection)
        {
            message.reply("Call me to the chat with 'to-me' command if you want me to play something.");
            return;
        }

        let dispatcher;

        if (args[0] == "red")
        {
            dispatcher = connection.playFile('/var/www/DiscordBot/snd/red.mp3');
            dispatcher.setVolume(10);
        }
        else
        {
            dispatcher = connection.playFile('/var/www/DiscordBot/snd/test.mp3');
            dispatcher.setVolume(0.4);
        }


        dispatcher.on('end', () => {
            // The song has finished
            message.reply("Song is over.");
            console.log("I've been playing for: " + dispatcher.time); // The time in milliseconds that the stream dispatcher has been playing for
          });
          
          dispatcher.on('error', e => {
            // Catch any errors that may arise
            console.log(e);
            console.log("I've been playing for: " + dispatcher.time); // The time in milliseconds that the stream dispatcher has been playing for
            
          });
          
        //   dispatcher.setVolume(1); // Set the volume back to 100%
          
        //   dispatcher.pause(); // Pause the stream
        //   dispatcher.resume(); // Carry on playing
          
        //   dispatcher.end(); // End the dispatcher, emits 'end' event
	},
};