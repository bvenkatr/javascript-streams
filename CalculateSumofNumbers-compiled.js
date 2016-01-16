var Stream = require('./stream-js');
var s = new Stream.create(1, 2, 3);
var sum = s.reduce(function (a, b) {
	return a + b;
});
console.log(sum);

//# sourceMappingURL=CalculateSumofNumbers-compiled.js.map