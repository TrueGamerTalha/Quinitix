module.exports = ({
name:"clearwarn",
aliases:['removewarn', 'remove warn', 'clear warn'],
cat:"Mod",
description:"Remove warning of a user. Kick permissions required.",
usage:"remove-warn <userid/name/mention> <number>",
code:`
$senddm[$get[user];{author:Warning Cleared!:$servericon}{description:**$usertag** removed your warning with the number **$get[warn]**!}{color:GREEN}{footer:Executed by $usertag in $servername:$authoravatar}{timestamp}]
$setuservar[reason;&&$joinsplittext[&&];$get[user]]
$edittextsplitelement[$sum[$get[warn];1];($get[warn]) Cleared By $usertag. ID: $authorid]
$textsplit[$getuservar[reason;$get[user]];&&]
$sendmessage[{author:Warning Cleared!}{description:I removed the warning with the number **$get[warn]** of **$usertag[$get[user]]**!}{color:$getVar[embedc]}{footer:Executed by $usertag}{timestamp};no]
$onlybotperms[embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;100];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:$getVar[embedc]}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;100];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:$getVar[embedc]}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot unwarn a bot!}{color:$getVar[embedc]}]
$onlyif[$get[user]!=$ownerid;{description:Cannot unwarn the owner!}{color:$getVar[embedc]}]
$onlyif[$get[user]!=$clientid;{description:Cannot unwarn myself!}{color:$getVar[embedc]}]
$onlyif[$checkcontains[$getuservar[reason;$get[user]];($get[warn]) ]==true;{description:That warning has already been cleared!}{color:$getVar[embedc]}]
$onlyif[$getuservar[wc;$get[user]]>=$get[warn];{description:That warning does not exist. Check their warns for existing warnings! They have **$getuservar[wc;$get[user]]** warns right now!}{color:$getVar[embedc]}]
$onlyif[$isnumber[$get[warn]]==true;{description:Enter a valid number!}{color:$getVar[embedc]}]
$let[user;$findmember[$message[1];no]]
$let[warn;$message[2]]
$onlyif[$message[2]!=;{description:Invalid Arguments! > \`\`\`
> $getservervar[prefix]clearwarn <userid/name/mention> <warn number>\`\`\`}{color:$getVar[embedc]}]
$onlyperms[kick;{description:Permissions required for execution of the command#COLON# \`Kick\`. You do not have the necessary permissions!}{color:$getVar[embedc]}]`})