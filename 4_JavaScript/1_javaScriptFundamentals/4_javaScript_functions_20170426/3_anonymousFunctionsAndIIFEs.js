console.log("------ Anonymous Functions and IIFEs -----");
console.log("");
/*
Objectives
- Create Function Expressions
- Write immediately invoked Function Expression
- Describe some use cases for immediately invoked function expressions
*/

// Creating Functions: 2 different ways

/* first is a function declaration:
- has a function name
*/
function functionDeclaration() {
	return "I am a function declaration";
}

/* second is a function expression: 
- does not assign a name to the function
- also known as "ananymous functions"
*/
let expression = function() {
	return "I am a function expression";
}

/* there is another difference between these two functions above (and it is a subtle difference).  It has to do with how variables get created in your program.  (more details in the next chapter */



/*
IIFE: Immediately Invoked Function Expressions 
- a function which immediately gets called after it is written.  
- simply wrap ananymous function in parenthesis, and then call the function:

(function functionDeclaration() {
	var person = "Kingsley";
	return person;
})();

- above defines an ananymous function that is immediately invoked. 

- (Note: the parenthesis around the function declaration are not optional! If you don't include them, you'll get a SyntaxError. You should verify this for yourself.)

*/
let result = (function functionDeclaration() {
	let person = "Kingsley";
	return person;
})();

console.log(result);
console.log();




/* IIFEs that Return Objects 
- common 
*/
let personObject = (function() {
	return {
		name: "Kingsley", 
		age: 39, 
		occupation: "Web Developer", 
		hobbies: "fitness"
	};
})();

/* after the code is executed, the "personObject" is equal to the object that was returned from the anonymous function 
- we can now use the object: */
console.log(personObject.name);
console.log(personObject.age);
console.log(personObject.occupation);
console.log(personObject.hobbies);
console.log();




// another example
var personObject1 = (function invokeRightAway() {
	var person = "Kingsley";
	return {
		getName: function() {
			return person;
		}, 
		setName: function(newName) {
			person = newName;
		}
	};
})();

/* Now the "personObject" we get back won't have data for each key, but rather a function that we can execute whenever we like: */
console.log(personObject1.getName());		// Kingsley
console.log(personObject1.setName("Mary"));	// undefined
console.log(personObject1.getName());		// Mary 
/* this piece of code give an error (so I commented it out):
- ReferenceError: person is not defined

console.log(person); */
console.log();



