var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var quote = [
    "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.",
    "You're so wise. You're like a miniature Buddha, covered in hair.",
    "All right meow. Hand over your license and registration.",
    "Ray, when someone asks you if you're a god, you say \"YES\"!",
    "So I got that goin' for me, which is nice.",
    "We have an old saying in Delta House: don't get mad, get even.",
    "Brothers don't shake hands. Brothers gotta hug.",
    "I am serious... and don't call me Shirley",
    "We got no food, we got no jobs... our PETS' HEADS ARE FALLING OFF!",
    "I made the duck blue because I've never seen a blue duck before and I wanted to see one."
];

var jokes = [
  { setup: "Guy walks into a bar",
    punchline: "Says ouch"}
];

app.get("/joke", function(req, res) {
  res.json(jokes[0]);
});

app.get("/quote", function(req, res) {
  var randomQuote = Math.floor(Math.random() * quote.length);
  res.send(quote[randomQuote]);
});

app.get("/", function(req, res) {
  res.send("hello, universe");
});

app.listen(port, function() {
  console.log('Server started on port ' + port);
});
