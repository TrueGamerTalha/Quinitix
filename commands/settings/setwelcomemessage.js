module.exports = {
 name: "welcomemessage",
 aliases: ["setwmsg", "setwelcomemessage", "wmsg"],
 code: `
$setServerVar[welcomemessage;$message]
$channelSendMessage[$channelID;Welcome Message Has Been Set To:
\`\`\`
$message
\`\`\`]
$onlyIf[$message!=;> **Useful Variables**:
\`\`\`
(user.name) - $username
(user.tag) - $userTag
(user.mention) - <@$authorID>
(server.name) - $serverName
(member.count) - $membersCount
\`\`\`

> **Current Message**
\`\`\`
$getServerVar[welcomemessage]
\`\`\`
]
$onlyPerms[manageserver;Missing Permission - ManageServer]
`
};