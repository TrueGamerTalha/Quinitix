module.exports = ({
 name: "$alwaysExecute",
 code: `$sendMessage[$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[lvlmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]];no]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]` 
})