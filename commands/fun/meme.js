module.exports = {
  name: "meme",
  code: `$title[$jsonRequest[https://meme-api.herokuapp.com/gimme;title]]
$color[$getVar[embedc]]
$image[$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]`
}