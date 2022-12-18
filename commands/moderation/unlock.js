module.exports = {
  name: "unlock", 
  code: `$modifyChannelPerms[$findChannel[$message;yes];+sendmessages;$guildID]
$color[$getVar[embedc]]
$title[**Channel Has Been UnLocked | :white_check_mark:**]
$description[**<#$findChannel[$message;yes]> Has Been Unlocked By $username**]
$onlyPerms[managechannels;You cannot use this command]
`
}