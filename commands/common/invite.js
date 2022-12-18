module.exports = {
  name: "invite",
  code: `$djsEval[const Discord = require('discord.js')
const {MessageButton, MessageActionRow} = require("discord-buttons");
let button = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.com/oauth2/authorize?client_id=857285048074764329&scope=bot&permissions=4294126911') 
  .setLabel('Invite Me!')
  .setEmoji("📎")
  
let button2 = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/hUFHaWsWTb') 
  .setLabel('Support Server!')
  .setEmoji("📡")

let row = new MessageActionRow()
  .addComponents(button, button2);

message.channel.send("Support Server And Invite Link For Spoidy!" ,row)
]`
};
