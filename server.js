//Requirements
var express = require("express");
var app = express();

//PORT
var PORT = process.env.PORT || 8080;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes/////////////////////////////////////////////////////////
app.get("/", function(req, res) {
  res.send("Hello world.");
});

//Start server
app.listen(PORT, function() {
  console.log("Listening on port " + PORT);
});
