module.exports = ({
name:"create-rr",
aliases:["createrr", "setup-rr", "setuprr"],
category:"RR",
description:"Start the setup of RR!",
usage:"create-rr",
code:`$awaitmessages[$authorid;1m;everything;r;Time is up! Use **$getservervar[prefix]create-rr** to start again!]
$customemoji[$getVar[createrr]] **New RR Group - Role: Part [1/5]**
Please mention/enter the role ID you want to give with this RR!
$setservervar[crole;]
$setservervar[cemoji;]
$setservervar[cbrole;]
$setservervar[corole;]
$setuservar[cmid;]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:$getVar[embedc]}]`})