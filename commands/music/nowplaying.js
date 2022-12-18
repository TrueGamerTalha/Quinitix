module.exports = ({
  name: "nowplaying",
  aliases: ['np'],
  code: `$author[Now Playing;https://cdn.discordapp.com/emojis/814941457798266942.gif]
    $description[Currently playing [$songInfo[title]\\]($songInfo[url]) 
    Added By: **$username[$songInfo[userID]]**
    Duration: $songInfo[duration]

Song Description:
$songInfo[description]]
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]
  $color[$getVar[embedc]]
$onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {color:$getVar[embedc]}]
$onlyIf[$voiceID[$clientID]!=; {title: Nothing Is Being Played Now!} {color: $getVar[embedc]}]
  `
  })