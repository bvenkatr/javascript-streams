var Stream = require('/Users/venkat/work/my-nodeschool/node_modules/stream.js');
//var Stream = require('stream-js');
var s = Stream.create(1,2,3);
var sum = s.reduce(function(a, b) {
	return a + b;
});
console.log(sum);

//var emptyStream = new Stream(null, null);
//console.log(emptyStream);
