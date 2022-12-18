module.exports = ({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;5]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]
$cooldown[2s;]`
}) 