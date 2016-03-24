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
var writableStream = fs.createWriteStream('output.txt');

// Handle stream events --> data, end, and error
readerStream.on('data',  function(result){
	data += result;
});
readerStream.on('end', function(){

	// Now pass data to writable stream
	writableStream.write(data);

});
readerStream.on('error', function(error){
	console.log("error", error);
});

writableStream.on('finish', function(){
	console.log('Write Completed');
});

writableStream.on('error', function(error){
	console.log(error.stack);
});
