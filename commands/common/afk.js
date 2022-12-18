module.exports = ({
 name: "afk",
 description: "Get an AFK status",
 cat: "utility",
 usage: "afk <reason/status>",
 code: `
<@$authorID>.. I set your AFK: $message
$wait[10s]
$setUserVar[afk;1;$authorID]
$setUserVar[afkwhy;$message;$authorID]
$setUserVar[time;$replaceText[$replaceText[$checkCondition[$splitText[1]==off];true;$dateStamp];false;]]
$suppressErrors
`
})