module.exports = {
  name: "clear",
  code: `
$title[**$username** Has Cleared $noMentionMessage Messages]
$color[$getVar[embedc]]
$deleteIn[3s]
$clear[$message[1];everyone;$channelID]
$onlyBotPerms[managemessages;I require Manage Messages permission for this to work.]
$onlyPerms[managemessages;You require Manage Messages permission for this to work.]
$onlyIf[$isNumber[$message]==true;Thats not a number!]`
};
