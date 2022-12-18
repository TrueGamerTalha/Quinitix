module.exports = ({
name: "eject",
code: `
$title[**Ejection...**]
$color[$getVar[embedc]]
$argsCheck[>1;:x: | You must mention a user!]
$image[https://vacefron.nl/api/ejected?name=$replaceText[$username[$mentioned[1]]; ;%20;-1]&imposter=$randomText[true;false]&crewmate=$randomText[red;black;blue;brown;cyan;darkgreen;lime;orange;pink;purple;white;yellow]] 

`})