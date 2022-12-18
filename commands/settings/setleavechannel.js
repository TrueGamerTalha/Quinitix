module.exports = {
 name: "setleavechannel",
 aliases: ["setlchannel", "leavechannel", "setlch"],
 code: `
$setServerVar[leavechannel;$mentionedChannels[1]]
Leave Channel has been set to <#$mentionedChannels[1]>.
$onlyIf[$mentionedChannels[1]!=; Please Mention A Channel!
Current Leave Channel: $replaceText[$replaceText[$checkCondition[$channelExists[$findChannel[$getServerVar[leavechannel]]]!=];true;<#$findChannel[$getServerVar[leavechannel]]>];false;Not Set Yet]]
$onlyPerms[manageserver;Missing Permission - ManageServer]
`
};