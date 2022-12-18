module.exports = {
  name: "vote",
  code: `
$djsEval[const Discord = require('discord.js')
const {MessageButton, MessageActionRow} = require("discord-buttons");
let button = new MessageButton()
  .setStyle('url')
  .setURL('https://top.gg/bot/857285048074764329') 
  .setLabel('Top\.GG')
  
  
let button2 = new MessageButton()
  .setStyle('url')
  .setURL('https://discordbotlist.com/bots/spoidy') 
  .setLabel('DiscordBotList')
  

let row = new MessageActionRow()
  .addComponents(button, button2);

message.channel.send("Vote For Spoidy Bot!" ,row)]

`
}