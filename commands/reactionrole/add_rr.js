module.exports = ({
name:"add-rr",
description:"Add another role to an RR!",
usage:"add-rr",
code:`$awaitmessages[$authorid;1m;everything;arr;Time is up! Use **$getservervar[prefix]add-rr** to start again!]
$customemoji[$getvar[createrr]] **Existing RR - Role: Part [1/3]**
Please mention/enter the role ID you want to add!
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:$getVar[embedc]}]`})