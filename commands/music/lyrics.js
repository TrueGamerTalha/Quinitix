module.exports = ({
name: "lyrics",
code:`$title[$songInfo[title]'s Lyrics.] 
$description[$jsonRequest[https://some-random-api.ml/lyrics?title=$songInfo[title];lyrics;No Lyrics Found for this song.]]
$suppressErrors[Failed finding lyrics with that song-name.]
$color[$getVar[embedc]]
$onlyIf[$message==;]
$onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {color:$getVar[embedc]}]
$onlyIf[$voiceID[$clientID]!=; {title: Nothing Is Being Played Now!} {color: $getVar[embedc]}]
`

})