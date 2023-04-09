console.log("--------- Variables and Primitives ---------------");	// separator

/*
Objectives: 
- initialize and assign variables in JavaScript
- Store variables using the prompt function
- Write comments in your JavaScript code
- List all of the data types in JavaScript
- compare/contrast primitive datatypes with objects
*/


/*
Variables
- like in math class often use letters like x or y to represent numbers
- used to read and change
- initialize using let (using this keyword is not neccessary, but in practice it should always be there)
- storage (the value) within variable
*/





// alert("Coming to you from first.js!");

// Greetings to the console... But suppose you want to change the name in these 3 different sections?
console.log("Hi, Kingsley!");
console.log("How are you doing, Kingsley?");
console.log("See you later, Kingsley!");


					

/*
To ask the user for first name
- this is a variable set to ask the end user a (question)
- output asking for input
- a single copy used to in different locations within the code
*/


/*
Prompt function 
- a pop up window appearing on the page asking user to fill in a text box
- in example below, you can use to store what the user types into a variable 
*/

// let firstName = prompt("What is your first name?");


// this is a variable (camel cased) with my name in it
let firstName = "Kingsley";
let lastName = "Cross";


/*
this is the output set to reply when the end user answers above prompt (answer to question)
- combine strings with the + operator, combining strings together (concatenation)
*/
console.log("Hi, " + firstName + " " + lastName + "!");

// based with variable's set question answered, being the end users first name.  
// It is outputing a question with end user name
console.log("How are you doing, " + firstName + "?");

// output replying with end users ansewr
console.log("See you later, " + firstName + "!");

// console.log("--------------------------------------------------");	// separator

console.log(" ");		












/*
6 Primative Data Types
- JavaScript is known as a "weakly" typed language. What this means is that when you create variables and assign them to values, you do not have to specify the type of data you are working with. In statically (or strongly) typed languages, like Java and C++, you do need to specify the type.
*/

// string 
let greeting = "hello";

// number 
let favoriteNum = 777;

// boolean
let isAwesome = true;

// undefined
let foo; 		// undefined
let setToUndefined = undefined;

// null
let empty = null;



console.log("-------------------- Strings --------------------");	// separator
// string 
// you can create console.log examples 
console.log(" ");		//  SPACER  SPACER  SPACER  SPACER  SPACER  SPACER  

// this is a variable defined with a string of words.
let greeting1 = "Hello World!";

// another variable with a string of words
let phrase = 'Kingsley said, "I haven\'t been to Jamaica for a while, can\'t even say since the other day."';


// the use of 2 variables defined and the string of words are concatenated together
console.log(greeting + " " + phrase);

console.log("\n\n\n\n");		



console.log("--------------- Dealing wih Numbers ---------------");	// separator
// number
// you can create console.log examples 
console.log(" ");		



// variables defined as numbers
// variables with numbers in it
let num = 5;		// positive numbers
let num1 = -25;  	// negative numbers

// not a fixed constant, but this is a variable with a number that could be constant (if it was only set to 3.14 without the remaining numbers behind it)
let piApproximation = 3.14159265;	// decimal numbers


// these are variables with numbers in them
let x = 1 + 3;
let a = 4.5;
let b = 5.9;

// negative numbers
let num2 = -25;

// decimal number
let piApproximation1 = 3.14159265;

// this is a variable with the 2 above varables calculated within 
// Math.sqrt() function - returns the square root of a number
let c = Math.sqrt(a * a + b * b);
console.log("This is square root of a * a + b * b set to C: " + c);


console.log("Math.sqrt(25): " + Math.sqrt(25));

console.log("let a = " + a);
console.log("let b = " + b);
console.log(Math.sqrt(a));
console.log(Math.sqrt(b));
console.log("Math.sqrt(a) + Math.sqrt(b) = " + (Math.sqrt(a) + Math.sqrt(b)));
console.log("*******");

console.log("The square root of a and b is " + c);


let studentTeacherRatio = 4 / 1;
console.log("Student teacher ratio, 4 / 1: " + studentTeacherRatio);

console.log("\n\n\n\n");		




console.log("---------- Boolean, true / false -----");		
// boolean - used for controlling the program

console.log(" ");		  
let pizzaIsGood = true;

let pizzaIsBad = false;



// if user is signed in show link to update thier profile
if (firstName === "Kingsley") {
	console.log("Welcome " + firstName + ", to Rithm, your new tech school and maybe job related");
} else {
	console.log("Hello " + firstName + ", you don't seem to be the original user of this webpage.");
}

console.log("\n\n");		




console.log("------------------ Undefined --------------------");

// undefined - any variable that is created (declared) in JavaScript that is not assigned a value

let noValue; 	// the value here will be undefined

console.log("The variable \"noValue\" is delcared without a definition is: " + noValue);

console.log("\n\n");		




// you can explicitly set a variable to undefined:
let favoriteFood = "fruit smoothy";

console.log("My favorite type of food was " + favoriteFood);

// changed your mind
let favoriteFood1 = undefined;

console.log("Just for programming purposes, it's now " + favoriteFood);

console.log("\n\n");		





console.log("------------------ Null --------------------");	
// null - not the same as undefined.  It signifies (represents) an intentional absense of data (value).

let secondEmailAddress = null;

console.log("");

/* discussion about the differences between "null" and "undefined":
https://www.quora.com/What-is-the-rationale-for-JavaScript-supporting-both-null-and-undefined
*/

// here is example given
let myVar = {
	"x": null,
	"y": "Why"
}
console.log(">>>>>>>>>USING null as an example");
console.log(
"let myVar = { \n" + 
"	\"x\": " + myVar.x + ", \n" +
"	\"y\": \"" + myVar.y + "\" \n" + "}");

console.log();	

console.log("y: " + myVar.y + "\nis defined and not null\n");

console.log("x: " + myVar.x + "\nis defined to be null\n");

console.log("z: " + myVar.z + "\nis both undefined and not null");

console.log("\n\n");		









console.log("-------------------- typeof --------------------");	
// keyword typeof returns the type of the variable.  there are some quirks to be aware of.

console.log(" ");		

// typeof String
console.log("\"\" is of type: " + typeof "");

// typeof number
console.log("5 is of type: " + typeof 5); 

// typeof boolean
console.log("false is of type: " + typeof false); 

// typeof symbol
console.log("Symbol() is of type: " + typeof Symbol()); 

// typeof undefined
console.log("Undefined is of type: " + typeof undefined); 

// typeof object, unexpected
console.log("Null is of type: " + typeof null); 


console.log("\n\n\n\n");		










console.log("------------ Converting between types ---------------");	
/*
- convert a value from one type to another
- example you want to do math on numbers from a form's "string value" of numbers 

- changing type implicitly, a process referred to as implicit type coercion, automatic change.  details of that discussed later



- explicit change the type of a values below
*/

console.log("------------ Converting to string ---------------");	
console.log("Converting value to a string.");
// toString() - converting any value which is not undefined or null into a string
console.log(" ");		

let num3 = 5;
let bool = true;

console.log("This value 5 is a value (typeof): " + typeof num);

// changing (setting) a variable number to a string
num.toString();

console.log("The value of number 5, now as a value (typeof): " + typeof num.toString());


// changing (setting) boolean into a string
bool.toString();
console.log("This is a boolean, now as a value (typeof): " + typeof bool.toString());

console.log("\n\n\n\n");		




console.log("-------------- Converting to number --------------");
console.log("Converting value to a number.");
console.log(" ");		
console.log("-------------------- parseInt --------------------");	
console.log(" ");		

/* 
- conveting to a number using parseInt or parseFloat.  
- Both of these functions will look at a string from left to right to make sure it can parse with startpoint of a number and if the numbers consist of a letter or character of some sort, it will not input from there to what's left over on the right
*/
parseInt("2");
parseFloat("2");
console.log("parseInt(\"2\") converted to a number --> " + parseInt("2"));
console.log("parseFloat(\"2\") converted to a number --> " + parseFloat("2"));

console.log("");

parseInt("3.14");
parseFloat("3.14");
console.log("parseInt(\"3.14\") converted to a number --> " + parseInt("3.14"));
console.log("parseFloat(\"3.14\") converted to a number --> " + parseFloat("3.14"));

console.log("");

// these parse the string into numbers until the starting point of a nonNumber and ends at that point (remaining info on the right hand side is not inputed)
parseInt("2.3alkweflakwe");
parseFloat("2.3alkweflakwe");
console.log("parseInt(\"2.3alkweflakwe\") converted to a number --> " + parseInt("2.3alkweflakwe"));
console.log("parseFloat(\"2.3alkweflakwe\") converted to a number --> " + parseFloat("2.3alkweflakwe"));

console.log("");

// as it looks from left to right here, the output turns out to be NaN for it starts off with a letter
parseInt("w2.3alkweflakwe");
parseFloat("w2.3alkweflakwe");
console.log("parseInt(\"w2.3alkweflakwe\") converted to a number --> " + parseInt("w2.3alkweflakwe"));
console.log("parseFloat(\"w2.3alkweflakwe\") converted to a number --> " + parseFloat("w2.3alkweflakwe"));


console.log("\n\n\n\n");		



console.log("-------------- Number Function --------------");	
console.log(" ");		

/* 
- simply tries to convert the entire string directly to a number.  
- Sometimes leading to slightly different behavior compared to parsing functions: 
*/
console.log("Number(\"2\"), converted to a number: " + Number("2"));
console.log("Number(\"3.14\"), converted to a number: " + Number("3.14"));

// output comes out to NaN... vs. with parseInt()'s output for the same string (see above code with parseInt())
console.log("Number(\"2.3alkweflakwe\"), converted to a number: " + Number("2.3alkweflakwe"));
console.log("Number(\"w2.3alkweflakwe\"), converted to a number: " + Number("w2.3alkweflakwe"));

console.log("\n\n");		




console.log("-------------- Urinary operator + --------------");	// separator
// a shorthand for the above conversion
console.log(" ");		//  SPACER  SPACER  SPACER  SPACER  SPACER  SPACER  

console.log("Same as above, but instead of Number(), +() was used.");
// could've commented this out instead

console.log("+\"2\", converted to a number --> " + +"2");
console.log("+\"3.14\", converted to a number --> " + +"3.14");
console.log("+\"2.3alkweflakwe\", converted to a number --> " + +"2.3alkweflakwe");
console.log("+\"w2.3alkweflakwe\", converted to a number --> " + +"w2.3alkweflakwe");
console.log(" ");		//  SPACER  SPACER  SPACER  SPACER  SPACER  SPACER  

console.log("\n\n");		





console.log("-------------- Converting to a boolean !! --------------");	

// talk about the ! operator on booleans in a later chapter.  
// !! will convert a value to its boolean equivalent

console.log(" ");		//  SPACER  SPACER  SPACER  SPACER  SPACER  SPACER  

let greeting2 = "hi";
let nothing = 0; 

// outputs true for the variable has something in it
console.log("Converting hi (string) in greeting variable with !!gretting: " + !!greeting2);

// outputs false for 0 is false and 1 is true.  
// ! is opposite, !! is the same
// why do we need this???  How do we use this in the real world???
console.log("Converting 0 (number) in  nothing variable with !!nothing: " + !!nothing);

console.log("\n\n");		





console.log("-------------------- Exercises --------------------");	// separator
console.log(" ");		

// 1. create variables
let name = "Kingsley";
let dayOfBirth = "25";

console.log("My name is " + name + ".  And my 2 digit birth month is " + dayOfBirth);

// 2. multiple variables of the same name and which takes precedence?  The later
name = "Snydah";
console.log("My alternate name is " + name);



// 3. prompts the user for thier fav color, with friendly message waiting afterwards... commented out to console.log it instead for testing purposes
// let favColor = prompt("What is your favorite color?");

// variable set to a string
// at first I was like what happend, why did I get an error...  the string was not set with "".
let favColor = "green";
console.log("Ah, I see your favorite color as " + favColor + ".  Great choice.");


// 4. a string that contains both single and double quotes
let stringQuotes = "This is a string that contains \"double\" and 'single' quotes.";

// calling the variable's input to output within console
console.log(stringQuotes);

/*
5. What is the difference between null and undefined?
- null is neither declared or defined.
- undefined is a variable without a definition.

6. What is NaN in JavaScript?  What is the typeof NaN?
- NaN is when trying to find out if a string that does not start with a number
- typeof NaN is --> "number"

7. You can delcare a variable by typing let thing;.  What is the value of thing?
The value is undefined
*/

console.log(" ");

// 6.		
console.log(typeof NaN);		


// 7.
let thing;

console.log(thing);



