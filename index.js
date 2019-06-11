const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}!')
});

client.on('message', msg => {
    if (msg.content === '!stockx') {
        msg.reply('I am the stockx bot');
    }
});

client.login('token'); // user token
