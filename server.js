const Aoijs = require("aoi.js")
const Discord = require("discord.js");
const bot = new Aoijs.Bot({
  token: "ODU3Mjg1MDQ4MDc0NzY0MzI5.YNNW6w._RocV9KaFMMh2juT0RRJYjvSxN0",
  prefix: ["$getServerVar[prefix]", "Spoidy", "<@857285048074764329>", "<@!857285048074764329>"]
});
const disbut = require('discord-buttons');
disbut(bot.client);

bot.status({
  text: "$serverCount Servers || s.help",
  type: "STREAMING",
  url: "https://www.twitch.tv/spoidybot",
  time: 12
});

bot.onMessage();
bot.onJoined();
bot.onLeave();
bot.onGuildJoin();
bot.onGuildLeave();
bot.onFunctionError();
bot.onReactionAdd();
bot.onReactionRemove();
bot.onInteractionCreate()
bot.onMessageUpdate()
bot.onMessageDelete()

bot.joinCommand ({
    channel: "$getServerVar[welcomechannel]",
    code: `
$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[welcomemessage];(user.tag);$userTag];(user.name);$username];(user.mention);<@$authorID>];(server.name);$serverName];(member.count);$membersCount]
$onlyIf[$channelExists[$getServerVar[welcomechannel]]==true;]
$suppressErrors
`
})

bot.joinCommand ({
    channel: "$getServerVar[welcomechannel]",
    code: `$giveRole[$authorID;$findRole[$getServerVar[autorole]]]
$onlyIf[$channelExists[$getServerVar[welcomechannel]]==true;]
$suppressErrors
`
})

bot.leaveCommand({
 channel: "$getServerVar[leavechannel]",
 code: `
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[leavemessage];(user.tag);$userTag];(user.name);$username];(user.mention);<@$authorID>];(server.name);$serverName]
$onlyIf[$channelExists[$getServerVar[leavechannel]]==true;]
`
})

bot.musicStartCommand({
	channel: '$channelID',
	code: `$author[Started Playing;https://cdn.discordapp.com/emojis/814941457798266942.gif]
$description[**[$songInfo[title]]($songInfo[url])**

  Added To The Queue By: 
<@$songInfo[userID]>

  Song Duration: 
\`\`\`
$jsonRequest[http://api.somecool.repl.co/yt-search?search=$songInfo[title];duration;]\`\`\`
  Volume: 
\`\`\`
$volume% \`\`\`
  Song Description:
 \`\`\`
$songInfo[description] \`\`\`
]
$addTimestamp 
$color[$getVar[embedc]] 
$volume[50]
$wait[1s]`
});

bot.botJoinCommand({
  channel: "865187243470880838",
  code: `$title[Spoidy Joined A Server!]
$color[$getVar[embedc]]
$description[**ServerName:** $serverName

**Server ID:** $guildID

**Owner:** $userTag[$ownerID]

**Region:** $serverRegion

**Members:** $membersCount]
$footer[I am in $serverCount Servers Now!]`
});


bot.botLeaveCommand({
  channel: "872005152402456628",
  code: `$title[Spoidy Left A Server!]
$color[$getVar[embedc]]
$description[**ServerName:** $serverName

**Server ID:** $guildID

**Owner:** $userTag[$ownerID]

**Region:** $serverRegion

**Members:** $membersCount]
$footer[I am in $serverCount Servers Now!]`
});

bot.functionErrorCommand({
channel:"865187147555405866",//optional
code:`
$title[Function: $handleError[function]]
$description[
Server: $serverName
Error: 
\`\`\`
$handleError[error]
\`\`\`]
$color[$getVar[embedc]]
`
})

bot.reactionRemoveCommand({
channel:"$channelid",
code:`$takerole[$authorid;$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]
$senddm[$authorid;Your role **$rolename[$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]** was taken from you, since you un-reacted to $emojitostring in the server **$servername**!]
$onlyif[$hasrole[$authorid;$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]==true;]
$textsplit[$replacetext[$getmessagevar[emoji];$emojitostring;];.]
$onlyif[$checkcontains[$getmessagevar[emoji];$emojitostring]==true;]
$onlyif[$getmessagevar[role]!=;]
$onlyif[$isbot[$authorid]==false;]`})

bot.reactionAddCommand({
channel:"$channelid",
code:`$if[$getuservar[cmid]==1]
$setuservar[cmid;]
$setservervar[cemoji;$getservervar[cemoji]$emojitostring.]
$awaitmessages[$authorid;1m;everything;ny;Time up! Use **$getservervar[prefix]create-rr** if you want to start again!]
$customemoji[$getvar[createrr]] **New Group - Extra Part**
Would you like to add another role, or not? Please enter **__yes__** OR **__no__**.
$elseif[$getuservar[armid]==1]
$setuservar[armid;]
$setservervar[aremoji;$emojitostring]
$awaitmessages[$authorid;1m;everything;armid;Time up! Use **$getservervar[prefix]create-rr** if you want to start again!]
$customemoji[$getvar[createrr]] **Existing RR - Message ID [Part 3/3]**
**Please enter the ID of the message you want to add this RR to. Note that the message should be from this channel, if not, try mentioning the channel and entering the message ID too!** Also note that the message should have an RR already, or you would have to execute this again!
$endelseif
$else
$endif
$onlyif[$isbot[$authorid]==false;]`})

bot.reactionAddCommand({
channel:"$channelid",
code:`$giverole[$authorid;$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]
$senddm[$authorid;You successfully recieved the role **$rolename[$advancedtextsplit[$getmessagevar[role];.;$findtextsplitindex[]]]**, since you reacted to $emojitostring in the server **$servername**!]
$onlyif[$checkcontains[$getmessagevar[emoji];.]==true;{execute:dr}]
$textsplit[$replacetext[$getmessagevar[emoji];$emojitostring;];.]
$onlyif[$replacetext[$replacetext[$checkcondition[$getmessagevar[orole]==a];true;true];false;$checkcontains[$userroles[$authorid;ids;.];$replacetext[$getmessagevar[orole];.;#SEMI#]]]==true;{execute:hnnr}]
$onlyif[$replacetext[$replacetext[$checkcondition[$getmessagevar[brole]==a];true;false];false;$checkcontains[$userroles[$authorid;ids;.];$replacetext[$getmessagevar[brole];.;#SEMI#]]]==false;{execute:hbr}]
$onlyif[$checkcontains[$getmessagevar[emoji];$emojitostring]==true;]
$onlyif[$getmessagevar[role]!=;]
$onlyif[$isbot[$authorid]==false;]`})

bot.updateCommand({
channel:"$randomchannelid", 
code:`$setchannelvar[esnipem;**Old Message:** $oldmessage\n\n**New Message:** $message;$channelused]
$setchannelvar[esnipea;$authorid;$channelused]
$onlyif[$partial==false;{execute:cache}]
$onlyif[$oldmessage!=$message;]`})

bot.deletedCommand({
channel:"$channelID",
code:`$settimeout[1h;
guild: $guildid] $djseval[//This is needed because it is against ToS to store the snipe data forever. Thats why I kept a timeout to remove it after an hour]
$setServerVar[snipe_messages;&&&&$replacetext[$message;&&&&;&&&]$getServerVar[snipe_messages]]
$setServerVar[snipe_author;&&&&$authorid$getServerVar[snipe_author]]
$setServerVar[snipe_datestamp;&&&&$advancedtextsplit[$divide[$datestamp;1000];.;1]$getServerVar[snipe_datestamp]]`})

bot.timeoutCommand({
channel:"",
code:`$setservervar[snipe_datestamp;$joinsplittext[&&&&];$get[guildid]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getservervar[snipe_datestamp;$get[guildid]];&&&&]
$setservervar[snipe_author;$joinsplittext[&&&&];$get[guildid]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getservervar[snipe_author;$get[guildid]];&&&&]
$setservervar[snipe_messages;$joinsplittext[&&&&];$get[guildid]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getservervar[snipe_messages;$get[guildid]];&&&&]
$let[guildid;$timeoutdata[guild]]`})

bot.loadCommands('./commands/');

bot.variables({
  wc:"0",//Warn Count
  reason:"",//Warn Reasons
  prefix: "s.",
  lvl: "1",
  rexp: "40",
  exp: "0",
  lvlmsg: "GG! {user.mention} you leveled up to level {level}!",
  col: "7000ff",
  bg: "",
  rsystem: "0",
  embedc: "7000ff",
  afk: "0",
  afkwhy: "",
  time: "", 
  welcomechannel: "",
  welcomemessage: "Hey (user.mention)! Welcome To **(server.name)**! You Are Our (member.count)th Member!",
  leavechannel: "",
  leavemessage: "Goodbye **(user.tag)**. Thanks For Staying At **(server.name)**!",
  autorole: "",
  createrr:"helpcommon",
  role:"",//Roles
  emoji:"",//Emojis
  orole:"",//Only for role
  brole:"",//Blacklisted roles
  cemoji:"",//Current emoji
  crole:"",//Current role
  corole:"",//Current only for role
  cmid:"",//Current messageid
  cbrole:"",//Current blacklisted role
  arrole:"",//Add RR Role
  aremoji:"",//Add RR emoji
  armid:"",//Add RR messageid
  massemoji:"false",//Mass Emoji
  antilink:"false",//Anti Links
  automod: "false",
  chatbotchannel: "",
  esnipea:"",//Edit-Snipe author
  esnipem:"",//Edit-Snipe message	
  snipe_messages:"",
  snipe_author:"",
  snipe_datestamp:"",
  nc:"",//nuke
  lchannel:"",//Levelling channel
  lmsg:"",//Levelling message
  multi:"1",//Channel multi
  xp:"0",//Current XP
  req:"100",//Current req for next level
  level:"0",//Current level
  lroleorder:"",//Level Roles Order
  lrole:"",//Level Roles
  lmsgorder:"",//Level Roles Order
  lmsges:"",//Level Roles
  lping:"false",//Ping on level up
});

bot.awaitedCommand({
name:"hbr",
code:`$djsEval[channel.messages.fetch(message.id).then(d=>d.reactions.resolve("$emojitostring").users.remove(author.id))]
$senddm[$authorid;**$servername:** Could not give you the role because you have a blacklisted role needed for that role!]`})
bot.awaitedCommand({
name:"hnnr",
code:`$djsEval[channel.messages.fetch(message.id).then(d=>d.reactions.resolve("$emojitostring").users.remove(author.id))]
$senddm[$authorid;**$servername:** You do not have the role required to obtain this role!]`})
bot.awaitedCommand({
name:"dr",
code:`$giverole[$authorid;$getmessagevar[role]]
$senddm[$authorid;You successfully recieved the role **$rolename[$getmessagevar[role]]**, since you reacted to $emojitostring in __$servername__!]`})


bot.awaitedCommand({
name:"cache",
code:`$cachemembers`})