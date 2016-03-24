# javascript-streams
For Source: https://github.com/substack/stream-handbook#introduction

Source from node.js: https://nodejs.org/api/stream.html

##Streams

What is a Stream?
	?

Streams make programming in node simple, elegant, and composable

A stream is an abstract interface implemented by various objects in Node.js.
For example a request to an HTTP server is a stream, as is stdout.

Streams are readable, writable, or both. All streams are instances of EventEmitter

There are 5 kinds of streams
 1) readable stream
    Readable streams produce data that can be fed into a writable, transform, or duplex stream by calling .pipe()
 2) writable stream
 3) transform
 4) duplex
 5) classic

 All the different types of streams use .pipe() to pair inputs with outputs.

#Streams are objects that let you read data from a source or write data to a destination in continous fashion.
In Node.js, there are four types of streams.

	Readable - Stream which is used for read operation.

	Writable - Stream which is used for write operation.

	Duplex - Stream which can be used for both read and write operation.

	Transform - A type of duplex stream where the output is computed based on input.

#Each type of Stream is an EventEmitter instance and throws several events at different instance of times.
For example, some of the commonly used events are:

	data - This event is fired when there is data is available to read.

	end - This event is fired when there is no more data to read.

	error - This event is fired when there is any error receiving or writing data.

	finish - This event is fired when all data has been flushed to underlying system

