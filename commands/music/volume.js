module.exports = {
name: "volume",
code: `
$title[Volume]
$addField[New Volume#COLON#;$message[1];no]
$color[$getVar[embedc]]
$addTimestamp
$volume[$message[1]]
$onlyIf[$isNumber[$message]==true;Thats not a number!]
$onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]
$onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {color:$getVar[embedc]}]
$onlyIf[$voiceID[$clientID]!=; {title: Nothing Is Being Played Now!} {color: $getVar[embedc]}]
`
}