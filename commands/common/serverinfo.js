module.exports = {
  name: "serverinfo",
  aliases: ["si", "serverinfo"],
  code: `
$title[**$serverName**]
$thumbnail[$serverIcon]
$color[$getVar[embedc]]

$addfield[**Server Created**;$guild[$guildID;created] 
( $guild[$guildID;timestamp] )]

$addfield[**Members ($membersCount)**;Online: $membersCount[$guildID;online]
DND: $membersCount[$guildID;dnd]
Idle: $membersCount[$guildID;idle]]

$addfield[**Channel Count ($channelCount[text;voice])**;
Channel Categories: $channelCount[category]
Text Channels: $channelCount[text]
Voice Channels: $channelCount[voice]]

$addfield[**Server Region**;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;:flag_br:];europe;:flag_eu:];hong kong;:flag_cn:];eua;:flag_us:];india;:flag_in:];japan;:flag_jp:] $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$serverRegion;brazil;Brazil];europe;Europe];hong kong;Hong Kong];eua;Eua];india;India];japan;Japan]]

$addfield[**Server ID**;$guildID]

$addfield[**Server Owner**;<@$ownerID> 
($ownerID)]`
};
