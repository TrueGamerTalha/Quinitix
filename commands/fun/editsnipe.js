module.exports = ({
name:"esnipe",
aliases: ["editsnipe",'esn'],
cat:"Fun",
explanation:"Get The Last Edited Message Of The Channel!",
bot:"Embed Links",
user:"None",
usage:"esnipe [channel]",
example:"esnipe",
explain:"Shows the last edited message in the current channel",
code:`$author[$usertag[$getchannelvar[esnipea;$get[channel]]];$useravatar[$getchannelvar[esnipea;$get[channel]]]]
$description[$getchannelvar[esnipem;$get[channel]]]
$color[$getVar[embedc]]
$onlyif[$getchannelvar[esnipem;$get[channel]]!=;No message since the time I joined the server has been edited in <#$get[channel]> :eyes:]
$let[channel;$mentionedchannels[1;yes]]
`
})