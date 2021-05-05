module.exports = {
	name: 'to-me',
	description: 'Get Angelotron on a voicechat you\'re currently on.',
	aliases: ["tm", "do-mnie"],
	cooldown: 5,
	execute(message, args) {
        if (!message.guild)
        {
            message.reply("This command can't be used in private conversations.");
            return;
        };

        if (message.member.voiceChannel)
        {
            message.member.voiceChannel.join()
            .then(connection => {message.reply("Connected to voice channel.")})
            .catch(console.log);
        }
        else
        {
            message.reply("You need to join voicechat first.");
        }
	},
};