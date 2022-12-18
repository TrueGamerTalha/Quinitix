module.exports = ({
name: "help",
code:
`
$reply[$messageID;{color:$getVar[embedc]}
{title:$toLocaleUppercase[$commandInfo[$message[1];name]]}
{field:**Category (Module)**:\`\`\`\n$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];cat]!=];true;$commandInfo[$message[1];cat]];false;None]\`\`\`:yes}
{field:**Description**:\`\`\`\n$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];desc]!=];true;$commandInfo[$message[1];desc]];false;None]\`\`\`}
{field:**Usage**:\`\`\`\n$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];usage]!=];true;$getServerVar[prefix]$commandInfo[$message[1];usage]];false;None]\`\`\`:yes}
{field:**Aliases**:\`\`\`\n$replaceText[$replaceText[$checkCondition[$commandInfo[$message[1];aliases]!=];true;$replaceText[$commandInfo[$message[1];aliases];,;, ]];false;None]\`\`\`}
{footer:Requested by $userTag[$authorID]:$authorAvatar}{timestamp:ms};no]
`
})