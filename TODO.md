Todo
##Release 0.0.1
Issues:- This code works but it's bulky and buffers up the entire data.txt file into memory for every request before
	writing the result back to clients. If data.txt is very large, your program could start eating a lot of memory
	as it serves lots of users concurrently, particularly for users on slow connections.

	The user experience is poor too because users will need to wait for the whole file to be buffered into memory on your
	server before they can start receiving any contents.
Solution:- Using streams we can avoid the above problem
