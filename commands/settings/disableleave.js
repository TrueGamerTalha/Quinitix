module.exports = {
 name: "disableleavechannel",
 aliases: ["disableleavech", "disableleave"],
 code: `
$setServerVar[leavechannel;1]
Leave System Has Been Disabled!
$onlyPerms[manageserver;Missing Permission - ManageServer]
`
};