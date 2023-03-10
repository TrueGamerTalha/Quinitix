module.exports = ({
name:"warn",
cat:"Mod",
description:"Warn a user. Bot can track a maximum of 25 warnings, after that the warnings wont be tracked into the user's warn count. Kick permissions required.",
usage:"warn <userid/name/mention> <reason>",
code:`$senddm[$get[user];{author:You recieved a warning in $servername!:$servericon}{description:<@$authorid> warned you, due to **$get[reason]**!\n\nYou now have **$get[warns]** warnings!}{color:FF0000}{timestamp}{footer:Issued by $usertag}]
$sendmessage[{author:Warned!}{description:I warned **$usertag[$get[user]]**, due to **$get[reason]**!\n\n<@$get[user]> now has **$get[warns]** warnings!}{color:$getVar[embedc]}{timestamp}{footer:Issued by $usertag};no]
$setuservar[reason;$getuservar[reason;$get[user]]&&($get[warns]) $usertag - $get[reason];$get[user]]
$setuservar[wc;$get[warns];$get[user]]
$onlybotperms[embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Embed Links\`. Permissions not granted, execution cancelled.]
$onlyif[$get[warns]!=26;{description:Cannot track more than 25 warnings!}{color:$getVar[embedc]}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$clientid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to me** in position of roles!}{color:$getVar[embedc]}]
$onlyif[$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;1];false;$roleposition[$highestrole[$authorid]]]<$replacetext[$replacetext[$checkcondition[$authorid==$ownerid];true;2];false;$roleposition[$highestrole[$get[user]]]];{description:The user is **above/equal to you** in position of roles!}{color:$getVar[embedc]}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot warn a bot!}{color:$getVar[embedc]}]
$onlyif[$get[user]!=$ownerid;{description:Cannot warn the owner!}{color:$getVar[embedc]}]
$onlyif[$get[user]!=$clientid;{description:Cannot warn myself!}{color:$getVar[embedc]}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:$getVar[embedc]}]
$let[warns;$sum[$getuservar[wc;$get[user]];1]]
$let[user;$findmember[$message[1];no]]
$let[reason;$messageslice[1]]
$onlyif[$message[2]!=;{field:Invalid Arguments Used!:> \`\`\`
> $getservervar[prefix]warn <userid/name/mention> <reason>\`\`\`}{color:$getVar[embedc]}]
$onlyperms[kick;{description:Permissions required for execution of the command#COLON# \`Kick\`. You do not have the necessary permissions!}{color:$getVar[embedc]}]`})
