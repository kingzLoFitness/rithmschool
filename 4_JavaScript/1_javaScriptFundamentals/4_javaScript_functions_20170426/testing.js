function sayHello(fname) {
	if(fname === "Kingsley") {
		console.log("Hello Boss.");
	} else if (fname === "Tatiana") {
		console.log("Hello " + fname + ".  Your something else.");
	} else {
		console.log("Hello " + fname + "!")
	}
}

// this is actually ananymous function... Hello World
var sayHello2 = function() {
	console.log("Second function output.  Which is ananymous coming up.");
}

sayHello("Kingsley");
sayHello("Seriah");
sayHello("Tatiana");

sayHello2();

