//****Class Exercise Solution: 2 types of loading - either as a html or the actual pic file

//Load express
var express = require("express");


//Create an instance of the application
var app = express();


//Mount public as a static resource directory
var staticResources = ["/public", "/bower_components"]
for (var i in staticResources)
    app.use(express.static(__dirname + staticResources[i]))





//Create server; note that this code allows us to change the port number simply by typing "node index.js <number>"
//if port is provided, use port; otherwise default to 3000

var port = parseInt(process.argv[2]) || 3000

//Bind server to port
app.listen(port, function () {
    console.log("Application started on port %d", port);
});





