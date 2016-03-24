/**
 * Read data from a text file
 *
 * source:- http://www.tutorialspoint.com/nodejs/nodejs_streams.htm
 */
var fs = require('fs');

// variable to store the data
var data = '';

//Create a readable stream from the given input
var readerStream = fs.createReadStream('./Docs/streams.md');

// Handle stream events --> data, end, and error
readerStream.on('data',  function(result){
	data += result;
});

readerStream.on('end', function(){
	console.log("End => Reading file has Done");
	console.log(data);
});

readerStream.on('error', function(error){
	console.log("error", error);
});
