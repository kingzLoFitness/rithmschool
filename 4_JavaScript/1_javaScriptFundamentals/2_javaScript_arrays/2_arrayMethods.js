
console.log("------- Array Methods --------");
console.log(" ");
// console.log();
/*
Objectives:
- Arrays length to see how many elements the array has
- modification methods like join, slice, concat (modifying arrays to create new arrays)
- search for elements in an array using indexOf and lastIndexOf
- describe difference between a reference type and value type
*/



// length of the array
var arr = [1,2,3,4];
console.log(arr);

arr.length;
console.log("Length of the array " + arr.length);

// this output comes out as undefined???
arr[arr.length];
console.log(arr[arr.length]);

// access the last element of an array when you don't know how many elements are inside it
// output is 4
arr[arr.length-1];
console.log(arr[arr.length-1]);

console.log();



/*
slice
- makes a copy of an array.
- we can use it to copy the entire array,
- or create a copy of a subarray (begin, end)

	- begin - Zero-based index at which to begin extraction.
	- end - Zero-based index before which to end extraction. slice extracts up to but not including end.

*/
console.log("Slice");
var arr =[1,2,3,4];

console.log("// invoke a slice with no arguments, a copy of the whole array is created");
var copy = arr.slice();
console.log(copy);
console.log();


var arr = [7,6,5,4,3,2];
console.log(arr);
arr.slice(1,2); // 6
console.log(arr.slice(1,2));

arr.slice(2,5);	// 5,4,3
console.log(arr.slice(2,5));

arr.slice(1,5);	// 6,5,4,3
console.log(arr.slice(1,5));

arr.slice(0,3);	// 7,6,5
console.log(arr.slice(0,3));

arr.slice(2,1);	// 0 (even if it was slice(3,1) etc)
console.log(arr.slice(2,1));

console.log();
console.log();
console.log();






// concat joins two arrays together
console.log("*****************************\n*****************************\nJoining 2 Arrays Together\n*****************************\n*****************************\n");
var arr1 = [1,2,3];
var arr2 = [4,5,6];

console.log(arr1);
console.log(arr2);
var combined = arr1.concat(arr2);
console.log(combined);
console.log();

// you can pass multiple arrays into concat and it will still return a single array to you
var arr1 = ["a","b","c"];
var arr2 = ["d","e","f"];
var arr3 = ["g","h","i"];

console.log(arr1);
console.log(arr2);
console.log(arr3);
var combined = arr1.concat(arr2,arr3);
combined;
console.log("\nCombination of arrays via .concat(): \n" + combined);
console.log();

// you don't even ned to pass an array into concat.  Any comma-separated list of values can be concateneated with the oringinal array
var openingWords = ["It", "was", "a"];
var moreOpinionWords = openingWords.concat("dark", "and", "stormy", "night");
console.log(moreOpinionWords);
console.log();



// join elements of an array into a string separated by whatever you pass in as an argument to join.  Referred to as delimiter.
var arr = ["Hello", "World"];
console.log(arr.join(" "));

var arr2 = ["I", "have", "a", "big", "announcement"];
console.log(arr2.join("! ") + "!");
console.log();


// indexOf finds the first index of the element passed in (starting from the left).  If the elements is not found, it returns -1.  Examples:
var arr = [1,2,3,4,5,4,4];
console.log(arr.indexOf(2));	// 1
console.log(arr.indexOf(3));	// 2
console.log(arr.indexOf(1));	// 0
console.log(arr.indexOf(4));	// 3
console.log(arr.indexOf(10));	// -1
console.log();


// you'll see this function very commonly used to check if an element is an array or not.
var moviesIKnow = [
	"Wayne's World",
	"The Matrix",
	"Anchorman",
	"Bridesmaids"
];

// var yourFavoriteMovie = prompt("What's your favorite movie?");
var yourFavoriteMovie = "Anchorman";
if (moviesIKnow.indexOf(yourFavoriteMovie) > -1) {
	console.log("Oh, cool, I've heard of " + yourFavoriteMovie + "!");
} else {
	console.log("I haven't hear of " + yourFavoriteMovie + ".  I'll check it out.");
}


// lastIndexOf works just like indexOf, but starts searching from the end of the array rather than the beginning
var arr = [1,2,3,4,5,4,4];
console.log(arr.indexOf(4));		// 3
console.log(arr.lastIndexOf(4));	// 6 (starts at the end)
console.log(arr.lastIndexOf(10));	// -1

console.log(" ");		//  SPACER  SPACER  SPACER  SPACER  SPACER  SPACER




console.log("------- Value vs. Reference --------");	
console.log(" ");		

// Reference vs. Value
/*
an essential distinction between primitives and objects (including arrays, which are type of object in JavaScript) is how thier values are passed when assigned to new variables.
*/

/*
Value types
- in this example, even though anotherInstructor variable has been changed, it did not affect the instructor variable.
- this is because each one of these primitive types has a specific address in memory.
- another way to think of this is that when we assigned anotherInstructor to equal instructor, JavaScript created a copy of the string "Ellie" and assigned that value to anotherInstructor.
- so even though those two variables were storing identical-looking strings, they can be modified independently of one another.
*/
console.log("--> VALUE type ");		

var instructor = "Ellie";
var anotherInstructor = instructor;
console.log("anotherInstructor is the same name as instructor, being: " + anotherInstructor);

// Let's assign a new value to anotherInstructor:
anotherInstructor = "Kingsley";

console.log("Original instructor: " + instructor);
console.log("Another instructor after being assigned a new value to itself: " + anotherInstructor);
console.log("Original instructor stays the same: " + instructor);
console.log(" ");		


/*
Reference types
this may seem confusing until we compare this with what happens when dealing with reference types.
- the instructorCopy did not create a new array,
- it just created a reference (or pointer) to the instructors array.
- In other words, unlike with our previous example, setting instructorCopy equal to instructors doesn't create a copy of the instructors array in Javascript.  Instead both variable names refer to the exact same array.
*/
console.log("--> REFERENCE type ");		


var instructors = ["Elie", "Kingsley"];
console.log("These are the instructors: " + instructors);

var instructorsCopy = instructors;
console.log("This is the reference instuctors to instructorsCopy: " + instructorsCopy);

instructorsCopy.push("Tim");

console.log("This is the instructorsCopy with an additional instructor added to the array: " + instructorsCopy);
console.log("The original instructors variable is changed as well as the two variables reference each other: " + instructors);


console.log(" ");		


// EXERCISES
// PART 1
// create empty array
var arr = [];

// add your first name to the variable
arr.unshift("Kingsley");
console.log(arr);

// add your last name to the end of the arr variable
arr.push("Cross");
console.log(arr);


// add your favorite color to the beginning of the variable
arr.unshift("green");
console.log(arr);

// remove yoru favorite color from the arr variable
arr.shift("green");
console.log(arr);

console.log();


// create another array
var arr2 = [];
console.log(arr2);

// add your favorite number
arr2.unshift(777);
console.log(arr2);

// add string "JavaScript" to the end of the array
arr2.push("JavaScript");
console.log(arr2);



// see if value 42 exists in the array.  Do this using the indexOf method.  What does indexOf return to you if the value passed to it can not be found in the array?
arr.indexOf(42);
console.log(arr.indexOf(42));		// -1 is returned
console.log(arr2);

// create new variable which is the result of your arr and arr2 variables combined into one array
var combinedArr = arr.concat(arr2);
console.log(combinedArr);

console.log();


// PART 2
var arr = ["JavaScript", "Python", "Ruby", "Java"];
console.log(arr);

// return Python and Ruby
arr.shift();
arr.pop();
console.log(arr);

// combine the array with the array Haskell and Clojure
var arr3 = ["Haskell", "Clojure"];

var combo = arr.concat(arr3);
console.log(combo);



// return the string "JavaScript, Python, Ruby, Java"
console.log(arr);
arr.unshift("JavaScript");
arr.push("Java");
console.log(arr);



// explain in your own words what the difference is between passing by value vs. passing by reference
/*
As I rewrote within the console
- Value types can change without changing original value from where it copied from (via variables)
- Reference types when changed changes the original from where it is referencing from (objects or array (an object type))
*/ 
