module.exports = {
name: "setchatbot",
code:`$setServerVar[chatbotchannel;$findChannel[$message;no]]
Successfully Set The Chatbot Channel To <#$findChannel[$message;no]>
$onlyIf[$mentionedChannels[1]!=; Please Mention A Channel!
Current Chatbot Channel: $replaceText[$replaceText[$checkCondition[$channelExists[$findChannel[$getServerVar[chatbotchannel]]]!=];true;<#$findChannel[$getServerVar[chatbotchannel]]>];false;Not Set Yet]]
$onlyPerms[manageserver;You Are Missing Permission - ManageServer]
`
}