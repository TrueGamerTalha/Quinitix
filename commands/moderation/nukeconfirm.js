module.exports = [{
name:"confirm",
type:"awaitedCommand",
code:`
$channelsendmessage[$splittext[1];{image:https#COLON#//media2.giphy.com/media/oe33xf3B50fsc/200.gif}{author:Channel Nuked by $usertag!:$authoravatar}{color:$getVar[embedc]}{timestamp};no]
$wait[1s]
$deletechannels[$getservervar[nc]]
$textsplit[$clonechannel[$getservervar[nc];yes]; ]`}]