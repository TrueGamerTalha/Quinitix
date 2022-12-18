module.exports = ({
name:"arr",
type:"awaitedCommand",
code:`$setservervar[arrole;$findrole[$message].]
$setuservar[armid;1]
$textsplit[$sendmessage[$customemoji[$getVar[createrr]] **Existing RR - Emoji: [Part 2/3]**
Now, please react with the emoji that will give this role, to the message that you sent!;yes]; ]
$setservervar[arrole;]
$setservervar[aremoji;]
$onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$findRole[$message]];The mentioned role is above my role! Try Putting My Role Above The Mentioned Roles.]
$onlyif[$roleexists[$findrole[$message]]==true;{description:Invalid role!}{color:$getVar[embedc]}]`})
