module.exports = {
 name: "setleavemessage",
 aliases: ["setlmsg", "leavemessage", "lmsg"],
 code: `
$setServerVar[leavemessage;$message]
$channelSendMessage[$channelID;Welcome Message Has Been Set To:
\`\`\`
$message
\`\`\`]
$onlyIf[$message!=;> **Useful Variables**:
\`\`\`
(user.name) - $username
(user.tag) - $userTag
(user.mention) - <@$authorID>
(server.name) - $serverName\`\`\`

> **Current Message**
\`\`\`
$getServerVar[leavemessage]\`\`\`
]
$onlyPerms[manageserver;Missing Permission - ManageServer]
`
};