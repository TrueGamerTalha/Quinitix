module.exports = {
  name: "help",
  code: `$title[$customEmoji[helpcommon] Spoidy Common Commands]
$addField[**$getServerVar[prefix]serverinfo**;\`\`\`
Gives Information Of The Server\`\`\`;yes]
$addField[**$getServerVar[prefix]userinfo**;\`\`\`
Gives Information Of A User\`\`\`;yes]
$addField[**$getServerVar[prefix]reminder**;\`\`\`
Make Spoidy Remind You\`\`\`;yes]
$addField[**$getServerVar[prefix]invite**;\`\`\`
Gives Invite Link For Spoidy\`\`\`;yes]
$addField[**$getServerVar[prefix]support**;\`\`\`
Gives Link To Support Server\`\`\`;yes]
$addField[**$getServerVar[prefix]vote**;\`\`\`
Vote For Spoidy To Get Rewards\`\`\`;yes]
$addField[**$getServerVar[prefix]info**;\`\`\`
Shows Spoidy's Stats\`\`\`;yes]
$addField[**$getServerVar[prefix]help**;\`\`\`
Shows The Help Commands \`\`\`;yes]
$color[$getVar[embedc]]
$onlyIf[$message[1]==common;]`
}