module.exports = ({
 name: "$alwaysExecute",
 code: `
$channelSendMessage[$channelID;$userTag[$mentioned[1]] is AFK since $parseDate[$sub[$dateStamp;$getUserVar[time;$mentioned[1]]];time] 
Reason: $getUserVar[afkwhy;$mentioned[1]]]
$onlyIf[$getUserVar[afk;$mentioned[1]]>=1;]
`
})