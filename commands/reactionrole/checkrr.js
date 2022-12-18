module.exports = ({
name:"checkrr",
aliases:["check-rr"],
category:"RR",
description:"Check all the Reaction Roles!",
usage:"checkrr",
code:`$title[All the current Reaction Roles in this server]
$description[$textSplit[$getMessageVar[role];/]]
$onlyperms[manageserver;{description:You need the \`Manage Server\` permissions!}{color:$getVar[embedc]}]`})