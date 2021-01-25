const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

const getRandom = (arr) => arr[Math.floor((Math.random()*arr.length))];

const activitiesQuotes = [
  "I do this for Aiur",
  "For Adun",
  "Nach ta'kala!",
  "What do I look like, an Orc?",
  "Gee'hous!",
  "Honour guide me!",
  "Issah'tu!",
  "My path is set"
]

// Basic example given by Discord.js github
client.on('ready', () => {

  const currentQuote = getRandom(activitiesQuotes);
  client.user.setPresence({ activity: { name: currentQuote }, status: 'online' });
  console.log(currentQuote);
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('pong');
  }
});

client.login(config.BOT_TOKEN);
