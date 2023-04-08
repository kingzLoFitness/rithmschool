console.log("------ Function Parameters and Scope -----");
console.log("");
/*
Objectives
- define what a parameter is and why they are essential when writing funcitons
- compare and contrast global and function scope
- understand what happens when variables are declared without the var keyword
*/

console.log("----- Function Parameters -----");
// input in our functions
// calculate the sum of two numbers
console.log(5+5);
console.log();


/* 
- what if we don't know what the numbers are?
- add inputs and use a function
- inputs to a function are called parameters or arguments
*/

// function with parameters within parenthesis.  returns the parameters that are executed within the function
function add(number1, number2) {
    return number1 + number2;
}

// this is the function that is being called.  Let's say the end user adds this in.  so there must be a way to call within HTML and or CSS.??????????????
console.log(add(1, 5));
console.log();

// similar to above function created.  It is a function recieving information from the function call
function add(a,b) {
    return a + b;
}

/*
calling functions.  again, like end user putting in information via wherever.  I say that for with HTML/CSS is one thing, then there should be a way to do it via other sources.  Looking forward to seeing what's good with videogames in that sense.  But I will have to keep up with my art and not stop that nor my physical artwork of self.  I just have to keep on thinking in this manner and be humble about this whole situation.
*/
console.log("Function returning 2 numbers: \n" + add(4, 6));
console.log(add(2, 8));
console.log(add(7, 1));
console.log();


// invoking the add function with paramters.  A parameter can be a literal number like we have above or we could even use variables

var num1 = 5;
var num2 = 8;
console.log("Adding 2 variables that has numbers in it: \n" + add(num1, num2));
console.log();



console.log("--------- Function Scope -----");
console.log("");

/*
define the variables inside the function
first we define what scope is
scope - the context in which values and expressions are 'visible', or can be referenced

2 kinds of scope
- global and function

important takeaways:
1. all variables that are defined outside of functions (and inside of function without the var keyword) are declared in the global scope, and 
2. all variables defined inside of functions can only be accessed by these functions (and any inner functions)
*/


// Example: a regular variable  
var globalVariable = "I live in the global scope";

// variable within a function
function makeNewScope() {
	// speaks for itself
    var functionScopeVariable = "I live in the scope of the makeNewScope function";
    return functionScopeVariable;
}


console.log("First function scope example");
// this is the global variable being called (global scope)
console.log(globalVariable);

/*
- maybe this will define the functionScopeVariable...
- for now, this is undefined 
- it is within the function and is local to that function 
*/

// NOTE: code, then define within comment of the code.

// the code
console.log("\nVariable declared locally and called (returned) within function: \n" + makeNewScope());



/*
This code below gives us an error! To be specific, a ReferenceError because the functionScopeVariable is not defined.

console.log(functionScopeVariable);

This is defined, but within the function makeNewScope(), giving the error "ReferneceError, because it cannot read it.  For the function that it is within is not being called." 
*/


/* Since this variable declaration is in the global scope, it will
be a global variable with or without the var keyword.  It is a best
practice to always use the var keyword though. */
globalVariable = "I live in the global scope";

function makeNewScope2() {
	/* You do not want to do this in practice.  You should
    always defined your variables with the var keyword. */	
    functionScopeVariable = "What happens now?";
	return functionScopeVariable;
}

console.log("\n\nSecond function scope example");

globalVariable;
console.log("Global variable (outside of function), being called: " + globalVariable);

makeNewScope2();
console.log("Calling function with local variable (without var keyword)within function: " + makeNewScope2());


// this code is used within the console of the browser
functionScopeVariable;

// this code is used within the Sublime Text Console
console.log("Calling the local variable (without var keyword) within the same function: " + functionScopeVariable);





/* If we omit the var keyword inside of a function, we actually declare that variable in the global scope. While this may seem like the way to go, this is not best practice. 

If we need to change some variable in a function, we should at least declare it in the global scope and assign it in a function so that our code is more readable. */

var globalVariable = "I live in the global scope";

// we declare the variable now, it's value is undefined
var globalVariableToBeChanged;

function makeNewScope3() {
	globalVariableToBeChanged = "Undefined no more";
	// return globalVariableToBeChanged;
} 

console.log("\n\nThird function scope example");
console.log(globalVariable);
console.log(makeNewScope3());	// now this will assign a new value to the globalVariableToBeChanged!
console.log(globalVariableToBeChanged);


console.log("\n\n\n");














console.log("----- Exercises -----");

// make a function for add / subtract / multiply / divide
function add(a, b) {
	return a + b; 
}

console.log(add(2,2)); // 4


function subtract(a, b) {
	return a - b;
}

console.log(subtract(2,2)); // 0


function multiply(a, b) {
	return a * b;
}

console.log(multiply(2,2)); // 4

function divide(a, b) {
	return a / b;
}

console.log(divide(2,2)); // 1

console.log("\n\n\n");













/*
- write a function called sayHello that takes in a string as a parameter
- if the parameter passed to the function is your first name, it should return "Hello Boss", 
- but if the parameter passed to the function is any other name, it should return the string "Hello" and the name parameter
*/
var firstName = "Tim";

function sayHello(name) {
	if (name === firstName) {
		console.log("Hello Boss");
	} else {
		console.log("Hello " + name);
	}
}


// for this example, my first name is Tim
sayHello("Tim"); // "Hello Boss"
sayHello("Janey"); // "Hello Janey"
sayHello("Elie"); // "Hello Elie"

console.log("\n\n\n");












/*
- Write a function called average which accepts an array as a parameter
- the function should return the average of all of the numbers in the array (you can assume that the array passed to the funciton will contain only numbers)
*/

function average(arr) {
/*	avgNum = (a + b + c + d + e + f) / 2;
	console.log(avgNum);
	return avgNum; 
*/
	var total = 0;

	for (i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	console.log(total / arr.length);
	return total / arr.length;
}


average([1,2,3,4,5]); // 3
average([1,2,3,4,5,6]); // 3.5
average([10,20]); // 15



console.log("\n\n\n");













/*
Write a function called createStudent, which accepts two parameters both of which are strings. The function should return an object with the keys firstName and lastName and the values should be each of the
*/

// my version
var myName = {};

function createStudent(firstName, lastName) {
	myName.firstName = firstName;
	myName.lastName = lastName;

	// calling first and last name only
	console.log(myName.firstName, myName.lastName);

	// object output
	console.log(myName);
	console.log("\n")
}

createStudent("Kingsley", "Cross");

createStudent("Elie", "Schoppik");

createStudent("Tim", "Garcia");



// rithms version, they used return verses console.log in this one
function createStudent1(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName
	}  
}

console.log(createStudent1("Seriah", "Cross"));
console.log("\n\n\n");

// also can create it like this, as done in next instruction of code
var seriah = createStudent1("Seriah", "Cross");



/* Using your createStudent function, create three students and save them each in a variable. Then create a variable called students, which is an array that will store your three students 

your students array should contain three objects each with the keys of firstName and lastName. If they do not - make sure you correctly implement the createStudent function from above!
*/

var tim = createStudent1("Tim", "Garcia");
var matt = createStudent1("Matt", "Lane");
var elie = createStudent1("Elie", "Schoppik");

var students = [seriah, tim, matt, elie];

console.log(students);

console.log("\n\ntesting the students array\n" , students);



console.log("\n\n\n");









/*
Write a function called findStudentByFirstName, which accepts one parameter, a string. 

This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. 

Otherwise it should return false. 

This function should be case insensitive so that you can search successfully regardless of capitalization
*/

/*
this is where I left off and have to dive deep into it.  Even to look back on arrays if I have to.

- looking back within the arrayIteration.js, it would seem like I should use the for loop to look up each of the names in the array

- I'm guessing I am to use ignoreCase
- example in MDN
	var regex = new RegExp('foo', 'i');

	console.log(regex.ignoreCase); 	// true

- now to put this into practical use in code below
*/

// NOTE: double check on functions with parameters again

function findStudentByFirstName(name) {
	// var searchStudent = new RegExp('students[i]', 'i');
	/*
	another way to write this "RegExp" as shown in MDN here:
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
	*/

	for (var i = 0; i <= students.length-1; i++) {
		
		var searchStudent = /students[i]/i;

		if (searchStudent.ignoreCase == students) {
			console.log(name + " is a student here");
		} else {
			console.log(name + " is a student there");
		}
	}
}

findStudentByFirstName('seRiah');
findStudentByFirstName('elie');
findStudentByFirstName('Elie');
findStudentByFirstName('Janey');
findStudentByFirstName('janey');
findStudentByFirstName('TIM');
findStudentByFirstName('MMMaaaTTTtttTTT');








/* 
***************************************************
***************************************************
***************************************************
Write a function called findStudentByFirstName, which accepts one parameter, a string. This function should iterate through the students array you just made and if the parameter passed to the function is the same as one of the first name's of the students, the function should return true. Otherwise it should return false. This function should be case insensitive so that you can search successfully regardless of capitalization

CODE:
findStudentByFirstName('elie') // true
findStudentByFirstName('Elie') // true
findStudentByFirstName('Janey') // false
findStudentByFirstName('Janey') // false
findStudentByFirstName('TIM') // true
findStudentByFirstName('MMMaaaTTTtttTTT') // false
***************************************************
***************************************************
***************************************************
 */










/* 
***************************************************
***************************************************
***************************************************
Write a function called extractEveryThird which accepts an array as a parameter. The function should iterate over the array and return a new array with every 3rd element in the array passed to the function.

CODE:
extractEveryThird([1,2,3]); // [3]
extractEveryThird([1,2,3,4,5,6]); // [3,6]
extractEveryThird(["a","b","c","d"]); // ["c"]
extractEveryThird(["first value", "second value", "third value"]); // ["third value"]
***************************************************
***************************************************
***************************************************
 */









/* 
***************************************************
***************************************************
***************************************************
Write a function called countEvensAndOdds which accepts an array as a parameter. This function should return an object with the count of even numbers and the count of odd numbers. The object returned should have the keys oddCount and evenCount.

countEvensAndOdds([1,2,3,4]);
/* 
 {
    oddCount:2,
    evenCount:2
 }
*/
/* countEvensAndOdds([1,2,3,4,5,6,7]); */
/* 
 {
    oddCount:4,
    evenCount:3
 }
*/

/*
***************************************************
***************************************************
***************************************************
 */









/* 
***************************************************
***************************************************
***************************************************
In the following example, what will be printed in the console? Make sure you first try read this code before pasting it into the console :)


CODE:
var myVar = "Hello from global";

function scopePractice() {
   var myVar = "Hello from function scope";
}

scopePractice();
console.log(myVar);

var tricky = "Hello from global";

function trickyScopePractice() {
    tricky = "Hello from function scope";
}

console.log(tricky);

***************************************************
***************************************************
***************************************************
 */









/* 
***************************************************
***************************************************
***************************************************
Optional Bonus

Write a function called onlyCapitalLetters which accepts a string and returns a new string with only the capital letters passed to the string.

part of CODE:
onlyCapitalLetters("Amazing") // "A"
onlyCapitalLetters("nothing") // ""
onlyCapitalLetters("EVERYTHING") // "EVERYTHING"

***************************************************
***************************************************
***************************************************
 */









