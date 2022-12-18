module.exports = ({
 name: "$alwaysExecute",
 code: `
$setUserVar[afk;0;$authorID]
$setUserVar[afkwhy;;$authorID] 
Hello <@$authorID>, I have removed your AFK.
$onlyIf[$getUserVar[afk;$authorID]>=1;]`
})