module.exports = ({
name:"checkwarns",
aliases:['check-warns','warns','warnings'],
cat:"Mod",
description:"Get a user's warnings. Only 25 warnings can be shown. Kick permissions required.",
usage:"warns [userid/name/mention]",
code:`$author[Here are the warnings of $usertag[$get[user]]!;$useravatar[$get[user]]]
$description[\`\`\`
$joinsplittext[\n\n]\`\`\`]
$footer[Requested by $usertag;$authoravatar]
$addtimestamp
$color[$getVar[embedc]]
$onlybotperms[embedlinks;Permissions I require the given permissions for the execution of this command#COLON# \`Embed Links\`. Permissions not granted, execution cancelled.]
$textsplit[$getuservar[reason;$get[user]];&&]
$onlyif[$getuservar[wc;$get[user]]!=0;{description:**$usertag[$get[user]]** user has 0 warnings!}{color:$getVar[embedc]}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot check warnings of a bot!}{color:$getVar[embedc]}]
$let[user;$findmember[$message;yes]]
$onlyperms[kick;{description:Permissions required for execution of the command#COLON# \`Kick\`. You do not have the necessary permissions!}{color:$getVar[embedc]}]`})
