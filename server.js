// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/make_reservation", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});

app.get("/view_tables", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});


// Create New Characters - takes in JSON input
app.post("/view_tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.uniqueId = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  reservervations.push(newTable);

  res.sendFile(path.join(__dirname, "view.html"));
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});