var fs = require('fs');

// create a readble stream
var readerStream = fs.createReadStream('TODO.md');

// create a writable Stream
var writerStream = fs.createWriteStream('todo.txt');

// Now pipe the read and write operations
readerStream.pipe(writerStream);

// Before writing below code , check whether readerStream has data or not?
writerStream.on('finish', function(){
	console.log('Writing completed');
});
