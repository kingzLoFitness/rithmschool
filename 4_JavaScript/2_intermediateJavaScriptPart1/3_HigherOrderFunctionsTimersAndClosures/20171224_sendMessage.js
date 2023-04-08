/*
Higher Order Function

Objective:
- Define what a higher order function is 
- Define what a callback function is 
- Understand why higher order functions can help reduce code duplication
*/


/*
A quick review of parameters and functions
- so far we've seen functions that take in all kinds of parameters: strings, numbers, booleans, even arrays and objects
- we can also pass functions as paramters

- we call functions that accept functions as paramters "higher order functions"
	- something special about JavaScript
	- not all languages allow us to pass other functions as parameters to functions
*/



/*
- Create a function called "sendMessage" that accepts a string and function 
- the "sendMessage" function will return the result of the function being passed to it with the message  as a parameter:


- send message is a higher order function as it accepts a parameter called fn. 

- How do we know fn is a function?   We can see the fn parameter is being 
invoked with ()
*/

function sendMessage(message, fn) {
	return fn(message);
}

sendMessage("Hello World", console.log);	// Hello World
sendMessage("Hello World", alert); 	// Hello World is alerted
sendMessage("What is your name?", prompt);	// value from prompt is returned
sendMessage("Do you like JavaScript?", confirm);	// true or false is returned


// Ananymous Functions As Parameters

sendMessage("Hello World", function(message) {
	// message refers to the string "Hello World"
	console.log(message + " from a callback function!");
});	// Hello World from a callback function!


/* Why Higher Order Functions?
- one advantage of higher order functions is code reuse.  
- previous examples we would have had to do a lot of work to get the same code
- higher order functions allow us to avoid writing separate functions like this:
*/

function sendMessageWithConsoleLog(message) {
	return console.log(message);
}

sendMessageWithConsoleLog("Hello World, from Kingsley Cross at kingzLoFitness.me and RacketINK.pro!");

/*************************************************/

function sendMessageWithAlert(message) {
	return alert(message); 
}

sendMessageWithAlert("This is another type of message for alert.");

/*************************************************/

function promptWithMessage(message) {
	return prompt(message);
}

var yourName = promptWithMessage("This is an example.  What is your name again?", "Your name");


/*************************************************/

function confirmWithMessage(message) {
	return confirm(message);
}

confirmWithMessage("Welcome to your new way of thinking my friend, " + yourName + ".");

/*************************************************/


function sendMessageFromCallback(message) {
	return console.log(message + " from a callback function!");
}

sendMessageFromCallback("This is a message into console... ");



/*************************************************/

/*
Callback Functions
*/
function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function math(a, b, callback) {
	return callback(a,b);
}

math(1,4,add);			// returns 5
math(5,5,subtract);		// returns 0

var callBackFunction = math(1,4,add);			// returns 5
console.log(callBackFunction);

callBackFunction = math(5,5,subtract);		// returns 0
console.log(callBackFunction);


/*
As we start making additional functions that perform operations on
the numbers we can pass them to the math function.  So if we make a 
divide or multiply function we can call all of them just using the 
math function
*/














