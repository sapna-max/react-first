var http = require('http');
const port = process.env.PORT||8210;

var server = http.createServer(function(req,res){
    res.write("Welcome to nodeJs");
    res.end()
})
