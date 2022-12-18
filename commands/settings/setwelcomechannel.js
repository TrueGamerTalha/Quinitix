module.exports = {
 name: "setwelcomechannel",
 aliases: ["setwchannel", "welcomechannel", "setwch"],
 code: `
$setServerVar[welcomechannel;$mentionedChannels[1]]
Welcome Channel has been set to <#$mentionedChannels[1]>.
$onlyIf[$mentionedChannels[1]!=; Please Mention A Channel!
Current WelcomeChannel: $replaceText[$replaceText[$checkCondition[$channelExists[$findChannel[$getServerVar[welcomechannel]]]!=];true;<#$findChannel[$getServerVar[welcomechannel]]>];false;Not Set Yet]]
$onlyPerms[manageserver;Missing Permission - ManageServer]
`
};