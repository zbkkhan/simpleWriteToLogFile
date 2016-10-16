var app = require('express')();
var http = require('http').Server(app);
var fs = require('fs');


http.listen(3000, function(){
  console.log('listening on *:3000');
});

app.get('/',function(req,res){
  res.sendFile(__dirname+"/index.html");
   });

app.get('/logging',function(req,res){
	console.log(req.query.LogData);
	fs.appendFile(__dirname+"/logs.log", req.query.LogData, function(err) {
		if(err) {
			return console.log(err);
		}
		
		console.log("The file was saved!");
	}); 
	res.send("Data logged successfully, check logs.log file")
   });