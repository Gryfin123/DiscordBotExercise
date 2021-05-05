/*
    Funkcje jakie ostatecznie bot powinien miec'
    // -- Proste -- //
  x - rzuty d20
    - annoy
    - kiedy ktos doda do wiadomosci "angelotron" albo go oznczy, bot dodaje serduszko w reakcji.
    - 

    // -- Baza danych -- //
    - sesja

    // -- Voice chat -- //
    - odtworz plik mp3, wav, etc.
*/
// --- Import required files --- //
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./auth.json'); // Value of "token" from file should be saved into 'token'
const RollingGuy = require("./include/roll.js");

// --- Init --- //
const client = new Discord.Client();
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

// Collect all files from folder commands and assign them to client.commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    // set a new item in the Collection
	// with the key as the command name and the value as the exported module
	

	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

let rollingGuy = new RollingGuy();





// --- Proccess --- //
client.on('message', (message) => {

    // Give a heart to someone who mentions angelotron
    if (message.content.toLowerCase().indexOf("angelotron") !== -1)
    {
        message.react("❤️");
    }

    // Change 'ban' to 'banan'... XD
    // Nnnno nie da sie... ale pomysl fajny...


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    

    const command = client.commands.get(commandName)
    	    || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    
    if (!command) return;


    // Check if message is meant to only be used on channels
    if (command.guildOnly && message.channel.type !== 'text') {
        return message.reply('I can\'t execute that command inside DMs!');
    }

    // Check if message requires arguments
    if (command.args && !args.length)
    {
        let reply = `You didn't provide any arguments, ${message.author}!`;
        if (command.usage) {
            reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
        }

        return message.channel.send(reply);
    }

    // Check if user waited long enough to use this command again
    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }
    
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;
    
    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    else
    {
        timestamps.set(message.author.id, now);
        setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    // Afetr validation try executing the command
    try 
    {
        command.execute(message,args);
    }
    catch (error)
    {
        console.error(error);
        message.reply("There was an error while trying to execute that command!");
    }

    // Process Commands
    /*
    switch (command)
    {
        // Test Commands
        case 'ping':
            client.commands.get('ping').execute(message, args);
        break;
        case 'beep':
            client.commands.get('beep').execute(message, args);
        break;
        case 'msg':
        case 'console-message':
            client.commands.get('console-message').execute(message, args);
        break;
        case 'si':
        case 'server':
        case 'server-info':
            client.commands.get('server-info').execute(message, args);       
        break;
        case 'ui':
        case 'user-info':
            client.commands.get('user-info').execute(message, args);   
        break;
        case 'ai':
        case 'args-info':
            client.commands.get('args-info').execute(message, args);                     
        break;
        case 'c':
        case 'clear':
            client.commands.get('clear').execute(message, args);    
        break;
        
        //DnD
        case 'p':
        case 'przypomnienie':
            client.commands.get('przypomnienie').execute(message, args);    
        break;

        // Rolling Dice
        case 'r':
        case 'roll':
            client.commands.get('roll').execute(message, args);    
        break;
        case 'rmss': 
        case 'roll-me-some-stas':  
            client.commands.get('roll-me-some-stats').execute(message, args);    
        break;          

    }
    //*/
});

client.on('ready', () => {
    console.log("Bot is now connected!");
    client.channels.find(x => x.name === 'test-channel').send(`Hello! I\'m here!`);
});

client.once('reconnecting', () => {
    console.log('Reconnecting!');
});

client.once('disconnect', () => {
    console.log('Disconnect!');
});



// --- Login --- //
client.login(token);
