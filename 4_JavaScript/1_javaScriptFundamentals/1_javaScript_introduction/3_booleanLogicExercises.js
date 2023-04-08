console.log("------- Boolean Logic Exercises --------");	
console.log(" ");		  
// Part one

2 == "2"; 
// true 
console.log(2 == "2");

2 === "2"; 
// false
console.log(2 === "2");

10 % 3; 
// 1
console.log(10 % 3);


10 % 3 === 1;
// true
console.log(10 % 3 === 1);

var taf = true && false;
// false
console.log("True and false  = " + (true && false));
console.log("True and false  = " + taf);

false || true;
// true
console.log("False or true = " + (false || true));

true || false;
// true
console.log("True or false = " + (true || false));


console.log(" ");	  



console.log("----- // part 2 ------");
var isLearning = true; 
if(isLearning) {
	console.log("Keep it up!");
} else {
	console.log("Pretty sure you are learning...");
}


// 1. What should the above code console.log?  Why?

// 2. Why do we not need to specify if(isLearning === true)?  Why does if(isLearning) work on its own?
console.log("############## Look over below and above ###################");
console.log("Finding out if firstVariable true, if not check other's.");

var firstVariable;
var secondVariable = "";
var thirdVariable = 1;
var secretMessage = "Shh1";

if(firstVariable) {
	console.log("first");
} else if(firstVariable || secondVariable) {
	console.log("second");
} else if(firstVariable || thirdVariable) {
	console.log("third");
} else {
	console.log("fourth");
}


// 1. What should the above code console.log?  Why?
// 2. What is the value of firstVariable when it is initialized?
// 3. Is the value of firstVariable a "truthy" value?  Why?
// 4. Is the value of thirstVariable a "truthy" value?  Why?





console.log(" ");

console.log("------- // part 3 ------");
console.log("------- Math.random --------");	// separator
// see also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
console.log(" ");		


/*
Math.random
- returns a floating point, pseudo-random number in the range [0,1]that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can scale to your desired range
- the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user
*/
function getRandom() {
	return Math.random();
}




// calling function
var ranNum = getRandom();

// as the function calls from the variable, it has has an extension of .toFixed() method to 2 numbers after the decimal
console.log("Math.random() --> " + ranNum.toFixed(2));






/*
Getting a random number between two values
- the example returns a random number between the specified values
- the returned value is no lower than (or maybe possibly equal to) min, and is less than (but not equal to) max
*/
function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

/*
- another variable calling another function. 
- this function that is being called has 2 arguments 
*/
var ranNum1 = getRandomArbitrary(0, 1);

// and is called by the console
console.log("Random number is " + ranNum1);








// this one was the original within MDN (compared to above fuction)
function getRandomArbitrary1(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}


// another variable calling another function with 2 agruments
var ranNum2 = getRandomArbitrary1(1, 5);

// and is called by the console
console.log("Random number is " + ranNum2);



// if random number is greater than 0.5 ...
if(ranNum2 > 0.5) {
	console.log("Over 0.5");
} else {
	console.log("Under 0.5");
}







/*
Getting a random number between two values
- the example returns a random number between the specified values
- the value is no lower than min (or the next integer greater than min if min isn't an integer), and is less than (but not equal to) max
*/
function getRandomInt(min,max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}


var ranNum3 = getRandomInt(1.3, 1.4);
console.log(ranNum3);






console.log(" ");
