var express = require('express');
var assets = require("./assets");
var app = express();
app.use("/assets", assets)

app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.static('public'));

app.get("*", function(request, response) {
  response.sendFile(__dirname + '/app/index.html');
});


var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
