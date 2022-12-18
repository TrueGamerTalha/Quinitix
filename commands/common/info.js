 module.exports = {
  name: "info",
  aliases: ["i", "botinfo"],
  code: `$author[Spoidy's Information;$userAvatar[$clientID]]
$color[$getVar[embedc]]
$addField[▪︎CPU Platform:; \`\`\`$djsEval[require ('os').platform();yes]\`\`\`;yes]
$addField[▪︎CPU Model:; \`\`\`$djsEval[require ('os').cpus()[0].model;yes]\`\`\`;yes]
$addField[▪︎Ram Usage:; \`\`\`$ram MB\`\`\`;yes]
$addField[▪︎CPU Usage:; \`\`\`$cpu%\`\`\`;yes]
$addField[$customEmoji[sdeveloper] **Developers**;\`\`\`\n$userTag[613963112726659092]
$userTag[833590819814244370]\`\`\`;yes]
$addField[$customEmoji[sDISCORD] **Members**;\`\`\`\n$allMembersCount\`\`\`;yes]
$addField[$customEmoji[sserver] **Servers**;\`\`\`\n$serverCount\`\`\`;yes]
$addField[$customEmoji[sinfinite] **Uptime**;\`\`\`\n$uptime\`\`\`;yes] 
$addField[$customEmoji[swifi] **Ping**;\`\`\`\n$botPing MS\`\`\`;yes]
`
};
