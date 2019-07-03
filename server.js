// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;




// Data
// =============================================================
var reservations = [
  {
    routeName: "mrbean",
    name: "Mr. Bean",
    phoneno: 1234567890,
    email: "bean@gmail.com",
    uniqueId: 1
  },
  {
    routeName: "ladybird",
    name: "Lady Bird",
    phoneno: 0987654321,
    email: "bird@gmail.com",
    uniqueId: 2
  },
  {
    routeName: "trump",
    name: "Trump",
    phoneno: 1357924680,
    email: "trump@gmail.com",
    uniqueId: 3
  }
];




// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


