console.log("-------------------- Boolean Logic --------------------");	
console.log(" ");		 

/* 
Objectives: 
- write conditional logic using boolean operators
- list all the falsey values in JavaScript
- Use if/else and switch statements to include conditional logic in your JavaScipt code
- explain the difference between == and === in JavaScript
- convert between data types explicitly in JavaScript
*/



/*
Boolean Logic
- to execute code in certain conditions 
- many different examples you'd want to conditionally execute commented

- execute code that depends on certain conditions
examples:
- navigation bar to look different based on whether or not someone is logged in
- if someone enters password incorrectly, let them know; otherwise, log them in
- build a tic-tac-toe game, and to know whether it's X's turn or O's turn
- build a social network and want to keep person A from seeing person B's profile unless the two of them are friends
- etc.

- It's very hard to write any kind of interesting software without making use of conditionals and boolean logic.


boolean 
- write conditional logic in JavaScript 
- true/false
- if and switch statements


- == or === is comparison values
- = is called an assignment (setting a variable equal to some value)
*/

var instructor = "Elie";

// outputs the else for Elie is not equal to Ellie
if(instructor === "Ellie") {
	console.log("Yes!, " + instructor + " is the right instructor.");
} else {
	console.log("No, " + instructor + " is spelled wrong or is a different instructor.");
}

console.log("\n\n");		

// var favoriteFood = prompt("What is your favorite food?");
var favoriteFood = "pizza";

if(favoriteFood === "pizza") {
	console.log("Pizza is my favorite food as well.");
} else {
	console.log("That's cool.  Pizza is my favorite food though.");
}






console.log("\n\n\n\n");		





console.log("-------------------- if / else if / else --------------------");

// var number = prompt("What is your favorite number?");
var number = 777;

if (number >= 1000) {
	console.log("Whoa, " + number + " is a big number!");
} else if (number >= 0) {
	console.log(number + " is a cool number!");
} else {
	console.log(number + " is a negative number, that's crazy!");
}
console.log("\n\n\n\n");		



console.log("-------------------- Ternary Operators --------------------");	
/*
- another way to write if else statement
- expression ? pathIfTrue : pathIfFalse
*/
console.log(" ");		

/*
// I had to comment this out for console.log view
var guess = prompt("Guess what number I'm thinking of!");

*/

var guess = 7;

guess === "7" ? console.log("Correct!") : console.log("Incorrect!  String and number 7 is not strictly equal.");



var number = 3;
var comparison = number > 0 ? "Greater than 0" : "Less than or equal to 0";
console.log(comparison);
console.log(" ");		

console.log("\n\n\n\n");		





console.log("------------- Switch Statments -----------");
console.log(" ");		 
// can be useful when there are multiple conditions (if/elseif/else) that can be met 

/*
// I had to comment this out for console.log purpose
// .toLowerCase() is a function that make the first letter (maybe other letters witihn as well) into lowercase letters (strings)
var feeling = prompt("How are you feeling today?").toLowerCase();
*/

var feeling = "awesome";

/*
// 
below are 4 perspectives of output based on:
- three cases if statement / else if / else if 
- and one default else 

-- for better readability
*/
switch(feeling) {
	case "happy":
	case "great":
	case "awesome":
		console.log("Awesome, I'm feeling happy too!");
		break;
	case "sad":
	case "aweful":
		console.log("That's too bad, I hope you feel better soon.");
		break;
	case "hungry":
	case "starving":
		console.log("Me too, let's go eat some pizza!");
		break;
	default:
		console.log("I see.  Thanks for sharing!");
}

console.log("\n\n\n\n");		




console.log("------------- Modulus Operator -----------");
console.log(" ");		  

5 % 3 === 2; // true
/*
var num = prompt("Please enter a whole number");
*/
var num = 4;  // an even number

// if number divided by 2 is zero, or no remainder, it is even, otherwise it is odd
if(num % 2 === 0) {
	console.log("the num variable is even!");
} else if (num % 2 === 1) {
	console.log("the num variable is odd!");
} else {	
	// if end user doen't enter properly with the prompt method (commented for console.log)
	console.log("Hey! I asked for a whole number!");
}


console.log(" \n\n\n\n\n");	




