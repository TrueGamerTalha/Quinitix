module.exports = [{
name:"r",
type:"awaitedCommand",
code:`$setservervar[crole;$getservervar[crole]$findrole[$message].]
$setuservar[cmid;1]
$textsplit[$sendmessage[$customemoji[$getvar[createrr]] **New Group - Emoji: [Part 2/5]**

Now, please react to this message with the emoji that will give this role. Note:**The Emoji Must Be From This Server**!;yes]; ]
$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$findRole[$message]];The mentioned role is above my role! Try Putting My Role Above The Mentioned Roles.]
$onlyif[$roleexists[$findrole[$message]]==true;{description:Invalid role!}{color:$getVar[embedc]}]
`
}]
