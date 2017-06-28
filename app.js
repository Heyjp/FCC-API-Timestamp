var express = require("express");
var app = express();
var path = require('path')
var bodyParser = require("body-parser");
var ejs = require('ejs');

// Timestamp parser
var dateAssembler = require("./controller/timestamp.js");

app.use(express.static(path.join(__dirname, 'public')));

// Templating engine
app.set('view engine', ejs);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
  res.render('index.ejs');
})

app.get('/api/:id', function(req, res){
  var request = req.params.id;
  res.json(dateAssembler(request));
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000");
});
