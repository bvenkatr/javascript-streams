//var Readable = require('stream').Readable;
//
//var readableStream = new Readable;
//
//readableStream.push("Hi Venkat, ");
//readableStream.push("How are you?\n");
//readableStream.push(null); // tells the consumer that readableStream is done outputting data.
//
//readableStream.pipe(process.stdout);

'use strict';
import {Readable} from 'stream';

class CustomReadableStream {
	createReadableStream() {
		let readableStream = new Readable;
		readableStream.push("Hi Venkat, ");
		readableStream.psuh("How are you?\n");
		readableStream.push(null);
		return readableStream;
	}
}

var crs = new CustomReadableStream();
crs.createReadableStream().pipe(process.stdout);