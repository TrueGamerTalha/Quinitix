module.exports = {
name:"rf",
aliases: ['readfile' , 'checkfile' , 'file' , 'fetchfile'],
code:`
$color[$getVar[embedc]]
$description[\`\`\`js
$readfile[$message]\`\`\`]
$onlyforids[$botownerid;:x: only $username[$botownerid]#$discriminator[$botownerid] can use this command]`}