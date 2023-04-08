console.log("------- Array Iteration (LOOPING) --------");	

console.log(" ");		

/*
Objectives: 
- understand what iteration is and why is it useful
- compare/contrast for, while and do...while loops
- use break and continue to write more efficident loops
*/

/* 
very often, you'll want to access each element of an array in order and do something with each element.  

examples:
- access an array of tweets and show each one on the page
- a list of numbers you want to apply some mathematical operation to
*/

// an array of numbers that you want to round to the nearest while number:
var decimals = [1.1, 1.6, 2.8, 0.4, 3.5, 1.6];

console.log(decimals);
/* 
one way to do this is to round each element individually usig the built-in Math.round function:
- but what if you have 100 numbers to round or 1,000?
- and what if we want to do something more complicated than simply round each one?
*/
decimals[0] = Math.round(decimals[0]);
decimals[1] = Math.round(decimals[1]);
decimals[2] = Math.round(decimals[2]);
decimals[3] = Math.round(decimals[3]);
decimals[4] = Math.round(decimals[4]);
decimals[5] = Math.round(decimals[5]);

console.log(decimals);
console.log("Decimals rounded off to the nearest decimal: " + decimals);


console.log(" ");		
/*
- But what if you have 100 numbers to round, even 1000's?
- And what if we want to do something more complicated than simply round each one? 
-- The approach we've used here doesn't scale very well.
*/

// iteration: for loops
console.log("------- Iteration: for loops --------");	
console.log(" ");		

/* 
for (initializer, condition, counter) {}

- initializer - delcare variables to be used in the loop; a counter variable for the number of times we should loop

- condition - an expression that returns true or false

- counter - change the variables initialized (increasing or decreasing them)
*/
for(var i=0; i<5; i++) {
	console.log(i);
}

console.log("");

for(var j=0; j<10; j+=3) {
	console.log(j);
}

console.log("\n\n\n");

var decimals = [1.1, 1.6, 2.8, 0.4, 3.5, 1.6];

for (var i = 0; i < decimals.length; i++) {
	console.log("Original decimals: " + decimals[i]);
	decimals[i] = Math.round(decimals[i]);
	console.log("Using Math.round to get: " + decimals[i] + "\n");
}





// iteration: while loops
console.log("------- Iteration: while loops --------");	// separator
console.log(" ");		//  SPACER  SPACER  SPACER  SPACER  SPACER  SPACER  
/*
- while loops only take a condition.  This means that you need to handle initializatin before the loop, and incrementing/decrementing inside of the loop.
- if you forget to increment/decrement inside the loop, the loop will never terminate; infinite loop
*/
var i = 0;
while(i < 5) {
	console.log(i);
	i++;
}


// rewrite of rounding example to use a while loop:
var decimals = [1.1,1.6,2.8,0.4,3.5,1.6];
var i = 0;

while(i < decimals.length) {
	console.log("Original decimal: " + decimals[i]);
	decimals[i] = Math.round(decimals[i]);
	console.log("Decimal rounded out: " + decimals[i] + "\n");
	i++;
}

	console.log(" ");




// iteration: do while loops
/* 
- similar to while loops; this specify our condition at the end
*/
var i = 0;
do {
	console.log(i);
	i++;
} while(i < 5);


console.log(" ");

// - main difference is the do...while loop is guaraneed to execute at least once... examples:
var i = 0; 
while(i < 0) {
	console.log(i);
	i++;
}

console.log("The while loop cannot execute if it is not true");

// the code inside the block runs once, before the while condition is checked
var j = 0;
do {
	console.log("This do...while is executed at least once (see code in .js)");
	console.log(j);
	j++;
} while (j < 0);



console.log();

// how we could rewrite our rounding example to use do...while loop:
var decimals = [1.1,1.6,2.8,0.4,3.5,1.6];
var i = 0;

do {
	console.log("Original: " + decimals[i]);
	decimals[i] = Math.round(decimals[i]);
	console.log("Rounded: " + decimals[i] + "\n");
	i++;
} while(i < decimals.length);

console.log("");

// Exiting out of loops
// sometimes we want to "exit a loop before it has finished".  To do that, use the word "break"
for(var i = 0; i < 5; i++) {
	if(Math.random() > 0.5) {
		console.log("Breaking out of the loop when i is " + i);
		break;
	} else {
		console.log("Within loop: " + i);
	}
}

console.log();

// we can also skip the current iteration and "continue the loop at the next step in the iteration" by using the word continue
for(var i = 0; i < 5; i++) {
	if(Math.random() > 0.5) {
		console.log("skipping the console.log when i is " + i);
		continue;
	} else {
		console.log("Within loop: " + i);
	}
}


console.log("");



// Strings revisited
/*
arrays and strings, compare/contrast theses two data types.  They have some similarites, but it's important to understand thier differences as well.
*/
// Looping over strings
/*
just like we can iterate over arrays(and objects), we can also iterate over strings!  Since strings have a length property, we always know at what point to stop looping, just like with arrays.  Example:
*/
var name = "elie";

for(var i=0; i < name.length; i++) {
	console.log(name[i]);
}

console.log("");



// Using split to turn a string into an array
/*
many times you will need to manipulate a string and turn it into an array.  To split a string into an array you can use the split method and pass in a delimiter value.
*/
var string = "hello world";
console.log(string.split(""));
console.log(string.split(" "));

console.log("\n\n\n");
// if you pass a delimiter into the split method, the delimiter values will be removed from the array:
var dashedString = "lots-of-dashes-here";
var removedDashes = dashedString.split("-");
console.log(removedDashes);


console.log("");

// we can then join the array using the join method to bring it back to a string.  You can think of the split as doing the opposite of what join does.
var dashedString = "lots-of-dashes-here";
console.log(dashedString);

var removedDashes = dashedString.split("-").join(" ");
console.log(removedDashes); 

console.log("");

// Mutability
// we've seen how you can update array values by simply accessing an array element and assigning it to a new value:
var arr = ["hi", "bye"];
arr[0] = "hello";
console.log(arr);


console.log("");

// you can also access characters in strings using bracket notation:
var name = "Matt";
console.log(name[0]);

// however, unlike with arrays, you can't reassign the value of a character in a string.  if you try JavaScript will simply ignore you:
var name = "Kingsley";
name[0] = "k";
console.log(name[0]);

/* 
This distinction between arrays adn strings highlights a concept called mutability.  
- arrays in JavaScript are mutable, since you can change any element inside of them via a simple reassignment.  
- strings are immutable, as you cannot change the cahracters within them in the same way that you do with arrays

-- any operation which changes characters in a string acutally produces a new string, rather than mutating the original string.  More on it here: https://www.sitepoint.com/immutability-javascript/
*/

