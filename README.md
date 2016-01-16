# javascript-streams
For Source: https://github.com/substack/stream-handbook#introduction

Source from node.js: https://nodejs.org/api/stream.html

##Streams

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

You can load the Stream base classes by doing require('stream').
There are base classes provided for Readable streams, Writable streams, Duplex streams, and Transform streams.

