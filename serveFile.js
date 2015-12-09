var http = require('http'),
		fs = require('fs'),
		oppressor = require('oppressor');
var handler = function(request, response){
	var stream = fs.createReadStream(__dirname + '/node_modules/express/lib/response.js');
	stream.pipe(oppressor(request)).pipe(response);
};

http.createServer(handler).listen(7777, function(){
	console.log("Server is listening at port 7777");
});
