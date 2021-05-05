module.exports = {
	name: 'leave-voicechannel',
    description: 'If Angelotron is on a voice channel, he\' play something nice',
    aliases: ['leave-voice', 'leave', 'wont', 'do-domu', 'wyjdz-prosze'],

	cooldown: 5,
	execute(message, args) {
        let connection = message.guild.voiceConnection;
        if (!connection)
        {
            message.reply("Call me to the chat with 'to-me' command if you want me to play something.");
            return;
        }
        connection.disconnect();
	},
};