module.exports = ({
 name: "ping",
 aliases: ["p"],
 code: `$author[Spoidy's Ping!;$userAvatar[$clientID]]
 $addField[Database Latency: ; \`\`\`$dbPing MS\`\`\`;yes]
 $addField[Websocket Latency: ; \`\`\`$ping MS\`\`\`;yes]
 $addField[Bot Latency: ; \`\`\`$botPing MS\`\`\`;yes]
 $color[$getVar[embedc]]
`
});
