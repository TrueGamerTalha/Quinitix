module.exports = ({
    name: "disablerank",
    code: `$title[Leveling system has been __Disabled__!]
$color[$getVar[embedc]]
$setServerVar[rsystem;0]
$onlyPerms[manageserver;{title:You need \`MANAGE_SERVER\` permission to execute this command!}{color:$getVar[embedc]}]
$cooldown[5s;Please wait **%time%**]`
}) 