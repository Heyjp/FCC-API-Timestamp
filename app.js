var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
var dateAssembler = require("./timestamp.js");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/:id', function(req, res){
  var request = req.params.id;
  res.json(dateAssembler(request));
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
