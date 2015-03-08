var express = require("express");
var app = express();
// Creates app objects.
var port = process.env.PORT || 3000;

// TEXT ENDPOINT
var words = [ "Summer", "Sunshine", "Clouds", "Fresh Grass", "Palm Trees", "Beaches", "Flowers", "Fruit"];


// JSON ENDPOINT
var joke = [
 { setup: "What's the difference between a guitar and a fish?",
 punchline: "You can't tuna fish." },
 { setup: "What do you get when you cross a cow and a duck?",
 punchline: "Milk and quackers." },
 { setup: "How many tickles does it take to make an octupus laugh?",
 punchline: "Ten Tickles" }
];

app.use(express.static(__dirname + "/app/"));

app.get('/', function(req, res){

res.sendFile("index.html");

})

// TEXT ENDPOINT
app.get("/words", function(req, res){
 var randomIndex = Math.floor(Math.random()*words.length);
  res.send(words[randomIndex]);
})

// JSON ENDPOINT

app.get("/joke", function(req, res) {
 var randomIndex = Math.floor(Math.random() * joke.length);
 res.json(joke[randomIndex]);
});

app.listen(port, function() {

console.log("Server stared on port " + port);

})
