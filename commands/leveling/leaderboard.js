module.exports = ({
name: "leaderboard",
aliases: ['lb'],
code:`
$title[$serverName[$guildID]'s Leaderboard]
$description[$userLeaderboard[lvl;asc/desc;{top}. {username} - level {value};10]
$thumbnail[$serverIcon]
$color[$getVar[embedc]]
$addTimestamp
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __Disabled__}{color:$getVar[embedc]}]
`
});