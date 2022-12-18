module.exports = {
    name: "ascii",
    code: `\`\`\`$jsonRequest[https://artii.herokuapp.com/make?text=$message]\`\`\`
    $onlyIf[$message!=;Please Type Something To Turn It Into Ascii Art]`
}