module.exports = {
 name: "setautorole",
 aliases: ["autorole"],
 code: `
$setServerVar[autorole;$findRole[$message]]
AutoRole Has Been Set To <@&$findRole[$message]>
$onlyIf[$roleExists[$findRole[$message]]==true; Thats Not A Valid Role!
We Recommend Setting The AutoRole In A Private Channel So The Members Don't Get Pinged!]
$onlyPerms[manageserver;Missing Permission - ManageServer]
`
};