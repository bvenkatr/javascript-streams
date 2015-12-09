var http = require('http'),
		fs = require('fs');

var handler = function(req, res){
	res.write("This is response from my server application");
	res.end();
};

http.createServer(handler).listen(7777, function(){
	console.log("Server is listening at port 7777");
});
