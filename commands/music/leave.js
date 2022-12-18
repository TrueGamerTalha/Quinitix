module.exports = ({
    name: "leave",
    code: `
    $title[$customEmoji[spoidyhelp] Successfully Left The Voice Channel!]
    $footer[Requested By $userTag]
    $color[$getVar[embedc]]
    $leaveVC
    $stopSong
    $onlyIf[$voiceID!=;{title:Error!} {description:You need to connect to a voice channel!} {color:$getVar[embedc]}]
    $onlyIf[$voiceID==$voiceID[$clientID];{title:Error!} {description:You need to be in the same VC as the bot! } {color:$getVar[embedc]}]
    $onlyIf[$voiceID[$clientID]!=; {title: Something Went Wrong!} {color: $getVar[embedc]}]
    $suppressErrors`
    });