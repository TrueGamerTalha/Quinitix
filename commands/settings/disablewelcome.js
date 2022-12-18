module.exports = {
 name: "disablewelcomechannel",
 aliases: ["disablewelcomech", "disablewelcome"],
 code: `
$setServerVar[welcomechannel;1]
Welcomer System Has Been Disabled!
$onlyPerms[manageserver;Missing Permission - ManageServer]
`
};