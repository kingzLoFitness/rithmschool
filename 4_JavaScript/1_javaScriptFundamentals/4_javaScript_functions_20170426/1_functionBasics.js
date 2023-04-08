console.log("----- Function Basics -----");

/*
Objectives:
- define what a function is and how they are essential in programming
- create functions using function declarations or function expressions
- explain how scope works in JavaScript and compare function, block and global scope
- understand what hoisting is and how the JavaScript compiler works when analyzing variables and functions
*/

/*
What is a Function?
- A function is a repeatable process of procedure.  
- has inputs and outputs
- process that return an expected output

-- a function takes a set of variables as inputs and returns a value as an output

-- functions we saw in action: "push and pop" that are functions that operate on an array
*/

var arr = [5,4,3,2,1];
console.log(arr);
console.log();

var poppedVAlue = arr.pop();
console.log(arr);
console.log(poppedVAlue);


console.log("");


// there are multiple ways towrite functions in JavaScript
console.log("--------- Declaring Functions -----");
console.log("");

/*
- function keyword
- name of the function
- any parameters for the function (within the parentheses after the function name)
- the function body (the code for the function, which lives inside of the curly braces)
*/
function anyNameYouWantForTheFunction() {
	// As many lines of code as you want
}

// Write the syntax a couple of times for muscle memory
function myFunction() {

}

function myOtherFunction() {

}

function yetAnotherFunction() {

}

function okayIgetItThisIsTheSyntaxForFunctions() {

}



// function with a function body
function firstFunction() {
	console.log("I just wrote my first function!");
}

// to call or invoke the function to execute the code within the function.  The function is invoked by adding a () after the name of the function
firstFunction();
console.log(firstFunction());
console.log();



console.log("--------- Returning Values from Functions -----");
console.log("");

/*
- to tell a function to return something, with the use of the return keyword 
- return is for outputting a value from a function and can only be using inside of functions
- if we do not specifically tell the function to return something, it will return undefined when it is finished executing
*/
function firstFunction() {
	return "I just wrote my first function";
}

// one way to call the function is by calling the function 
console.log(firstFunction());

console.log("\n\n");

// another way is to use a variable
var returnValue = firstFunction();
console.log("With use of var to equal a function, you can call the variable: ", returnValue);


console.log("");

// another example where you can only use return once, other lines on code within the block will not be executed
function secondFunction() {
	return "Hello";
	return "Goodbye";		// does not execute second return
}

console.log(secondFunction());


console.log("");



console.log("------ Conditional Logic with Return Statements -----");
console.log("");

// with boolean logic (if a random number)
function isOverPointFive() {
	if (Math.random() > .5) {
		return true;
	} else {
		return false;
	}
}
console.log(isOverPointFive());


/* 
- remember, the return keyword exists from a function
- so if the random number is greater than .5 we will exit the function early and never reach the else condition
- so we don't even need the "else" condition
- we can refactor code to look like this

- where if the number is greater than .5, return true and exit the function
- otherwise just return false
*/
function isOverPointFive() {
	if (Math.random() > .5) {
		return true;
	}
	return false;
}

console.log("Output for function \"isOverPointFive()\": " + isOverPointFive());


// we can also use a ternary operator
function isOverPointFive() {
	return Math.random() > .5 ? true : false;
}

console.log(isOverPointFive());

// simplified even further, Math.random() > .5 returns true or false, so we don't actaully need the ternary operator:
function isOverPointFive() {
	return Math.random() > .5;
}

console.log(isOverPointFive());






console.log("");



console.log("------ Exercises -----");
console.log("");

// write a function called myName that logs your full name.  Save your full name to a variable inside of the function body, then use console.log to print your name to the console.
function myName() {
	var fullName = "Kingsley Cross";
	return fullName;
}

console.log(myName());

console.log();



// Create an array called favoriteFoods which contains the strings "pizza" and "icecream"
var favoriteFoods = ["pizza", "icecream"];
console.log("These are my favorite foods: " + favoriteFoods);
console.log(favoriteFoods);

// write a function called randomFood.  The function should use Math.random to randomly choose a favorite food in your favoriteFoods array to return.  For example, your function will return either pizza or ice cream, depending on what you get back from Math.random
function randomFood() {
	if (Math.random() > .5) {
		return favoriteFoods[1];
	} else {
		return favoriteFoods[0];
	}
}

console.log(randomFood());
console.log();


// create a variable called numbers which is an array that contains the numbers 1 - 10
var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers);
console.log();

// write a function called displayOddNumbers which iterates over the numbers array and console.logs out all the numbers that are odd.  
function displayOddNumbers() {
	console.log("display odd numbers");
	for(i=0; i < numbers.length; i++) {
		if (i % 2 === 0)
		console.log(numbers[i]);
	}
}

displayOddNumbers();
console.log("");


// write a function called displayEvenNumbers whch iterates over the numbers array and console.logs out all the numbers that are even.
function displayEvenNumbers() {
	console.log("display even numbers");
	for(i=0; i < numbers.length; i++) {
		if (i % 2 !== 0)
		console.log(numbers[i]);
	}
}

console.log(displayEvenNumbers());
console.log("");


// create a function called returnFirstOddNumber which iterates over the numbers array and returns the first even number it finds
function returnFirstOddNumber() {
	console.log("display first odd number");
	for(i=0; i < numbers.length; i++) {
		if(numbers[i] % 2 === 0) {
			return (numbers[i]);
		}
	}
}

console.log(returnFirstOddNumber());
console.log();

// create a function called returnFirstOddNumber which iterates over the numbers array and returns the first even number it finds
function returnFirstEvenNumber() {
	console.log("display first even numbers");
	for(i=0; i < numbers.length; i++) {
		if(numbers[i] % 2 !== 0) {
			return numbers[i];
		}
	}
}

console.log(returnFirstEvenNumber());

console.log("");

// create a function called returnFristHalf which returns the first half of the numbers array
function returnFirstHalf() {
	console.log("return first half of numbers, my way");
	for(i=0; i < numbers.length; i++) {
		if(i >= 5) {
			break;
		}
		console.log(numbers[i]);
	}
}
returnFirstHalf();

console.log("");

// create a function called returnSecondHalf which returns the first half of the numbers array
function returnSecondHalf() {
	console.log("return second half of numbers, my way");
	for(i=0; i < numbers.length; i++) {
		if(i >= 5) {
		console.log(numbers[i]);
		}
	}
}
returnSecondHalf();






/* 
Solutions
myName

function myName(){
    var myName = 'Elie Schoppik';
    console.log(myName);
}
randomFood

var favoriteFoods = ['pizza', 'ice cream'];
function randomFood(){
    // lets find a random number between 0 and 1 and multiply it by the length of the array. This will give us a number between 0 and 2. If we always round down, we will get either 0 or 1, so we can use Math.floor to round down.
    var randomIndex = Math.floor(Math.random() * favoriteFoods.length);
    console.log(favoriteFoods[randomIndex]);
}
displayOddNumbers

var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayOddNumbers(){
    for(var i = 0; i < numbers.length; i++){
        // if the value we are at in the array is not divisible by 2 (it's an odd number)
        if(numbers[i] % 2 !== 0){
            // print out that value!
            console.log(numbers[i]);
        }
    }
}
displayEvenNumbers

var numbers = [1,2,3,4,5,6,7,8,9,10];
function displayEvenNumbers(){
    for(var i = 0; i < numbers.length; i++){
        // if the value we are at in the array is divisible by 2 (it's an even number)
        if(numbers[i] % 2 === 0){
            // print out that value!
            console.log(numbers[i]);
        }
    }
}
returnFirstOddNumber

var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstOddNumber(){
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            // print out that value, using return gets us out of the function!
            return numbers[i];
        }
    }
}
returnFirstEvenNumber

var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstEvenNumber(){
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0){
            // print out that value!
            return numbers[i];
        }
    }
}
returnFirstHalf

var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnFirstHalf(){
    return numbers.slice(0,numbers.length/2);
}
returnSecondHalf

var numbers = [1,2,3,4,5,6,7,8,9,10];
function returnSecondHalf(){
    return numbers.slice(numbers.length/2);
}
*/
