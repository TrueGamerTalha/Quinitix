module.exports = ({
name:"snipe",
aliases: ['sn'],
cat:"Fun",
explanation:"Get The Last Deleted Message Of The Channel!",
bot:"Embed Links",
user:"None",
usage:"snipe [channel]",
example:"snipe",
explain:"Shows the last deleted message in the current channel",
code:`$author[Snipe #$sub[$get[number];1] - Deleted by $usertag[$get[author]];$useravatar[$get[author]]]
$description[$get[content]]
$addfield[** **;Deleted On <t:$get[datestamp]>]
$footer[Requested by $username | Snipe $sub[$get[number];1]/$sub[$gettextsplitlength;1]]
$addtimestamp
$color[$getVar[embedc]]
$let[author;$advancedtextsplit[$getservervar[snipe_author];&&&&;$get[number]]]
$let[content;$advancedtextsplit[$getservervar[snipe_messages];&&&&;$get[number]]]
$let[datestamp;$advancedtextsplit[$getservervar[snipe_datestamp];&&&&;$get[number]]]
$onlyif[$gettextsplitlength>=$get[number];There are only $sub[$gettextsplitlength;1] sniped messages]
$textsplit[$getservervar[snipe_messages];&&&&]
$onlyif[$get[number]!=1;How do you snipe the "0th" deleted message lol]
$let[number;$sum[$replacetext[$replacetext[$isnumber[$message[1]];true;$message[1]];false;1];1]]
`
})