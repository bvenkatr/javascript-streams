var http = require('http'),
		fs = require('fs');

var handler = function(request, response){
	fs.readFile(__dirname + '/node_modules/express/lib/response.js', function(err, data){
		response.end(data);
	});

};
//
// The app.listen function takes an optional callback, which is called once the app is ready to start taking requests

http.createServer(handler).listen(7777, function(){
	console.log("Server is listening at port 7777");
});
