module.exports = {
  name: "lock", 
  code: `$modifyChannelPerms[$findChannel[$message;yes];-sendmessages;$guildID]
$color[$getVar[embedc]]
$title[**Channel Has Been Locked | :white_check_mark:**]
$description[<#$findChannel[$message;yes]> **Has Been Locked By $username**]
$onlyPerms[managechannels;You cannot use this command]
`
}