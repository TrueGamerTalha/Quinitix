module.exports = ({
    name: "enablerank",
    code: `$title[Leveling system has been __Enabled__!]
$color[$getVar[embedc]]
$setServerVar[rsystem;1]
$onlyPerms[manageserver;{title:You need \`MANAGE_SERVER\` permission to execute this command!}{color:$getVar[embedc]}]
$cooldown[5s;Please wait **%time%**]`
}) 