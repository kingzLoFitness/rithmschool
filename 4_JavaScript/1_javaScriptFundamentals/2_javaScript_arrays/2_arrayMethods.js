
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
let arr = [1,2,3,4];
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
let arr1 =[1,2,3,4];

console.log("// invoke a slice with no arguments, a copy of the whole array is created");
let copy = arr1.slice();
console.log(copy);
console.log();


let arr2 = [7,6,5,4,3,2];
console.log(arr2);
arr2.slice(1,2); // 6
console.log(arr2.slice(1,2));

arr2.slice(2,5);	// 5,4,3
console.log(arr2.slice(2,5));

arr2.slice(1,5);	// 6,5,4,3
console.log(arr2.slice(1,5));

arr2.slice(0,3);	// 7,6,5
console.log(arr2.slice(0,3));

arr2.slice(2,1);	// 0 (even if it was slice(3,1) etc)
console.log(arr2.slice(2,1));

console.log();
console.log();
console.log();






// concat joins two arrays together
console.log("*****************************\n*****************************\nJoining 2 Arrays Together\n*****************************\n*****************************\n");
let arr3 = [1,2,3];
let arr4 = [4,5,6];

console.log(arr3);
console.log(arr4);
let combined = arr3.concat(arr4);
console.log(combined);
console.log();

// you can pass multiple arrays into concat and it will still return a single array to you
let arr5 = ["a","b","c"];
let arr6 = ["d","e","f"];
let arr7 = ["g","h","i"];

console.log(arr5);
console.log(arr6);
console.log(arr7);
let combined1 = arr5.concat(arr6,arr7);
combined1;
console.log("\nCombination of arrays via .concat(): \n" + combined1);
console.log();

// you don't even ned to pass an array into concat.  Any comma-separated list of values can be concateneated with the oringinal array
let openingWords = ["It", "was", "a"];
let moreOpinionWords = openingWords.concat("dark", "and", "stormy", "night");
console.log(moreOpinionWords);
console.log();



// join elements of an array into a string separated by whatever you pass in as an argument to join.  Referred to as delimiter.
let arr8 = ["Hello", "World"];
console.log(arr8.join(" "));

let arr9 = ["I", "have", "a", "big", "announcement"];
console.log(arr9.join("! ") + "!");
console.log();


// indexOf finds the first index of the element passed in (starting from the left).  If the elements is not found, it returns -1.  Examples:
let arr10 = [1,2,3,4,5,4,4];
console.log(arr10.indexOf(2));	// 1
console.log(arr10.indexOf(3));	// 2
console.log(arr10.indexOf(1));	// 0
console.log(arr10.indexOf(4));	// 3
console.log(arr10.indexOf(10));	// -1
console.log();


// you'll see this function very commonly used to check if an element is an array or not.
let moviesIKnow = [
	"Wayne's World",
	"The Matrix",
	"Anchorman",
	"Bridesmaids"
];

// let yourFavoriteMovie = prompt("What's your favorite movie?");
let yourFavoriteMovie = "Anchorman";
if (moviesIKnow.indexOf(yourFavoriteMovie) > -1) {
	console.log("Oh, cool, I've heard of " + yourFavoriteMovie + "!");
} else {
	console.log("I haven't hear of " + yourFavoriteMovie + ".  I'll check it out.");
}


// lastIndexOf works just like indexOf, but starts searching from the end of the array rather than the beginning
let arr11 = [1,2,3,4,5,4,4];
console.log(arr11.indexOf(4));		// 3
console.log(arr11.lastIndexOf(4));	// 6 (starts at the end)
console.log(arr11.lastIndexOf(10));	// -1

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

let instructor = "Ellie";
let anotherInstructor = instructor;
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


let instructors = ["Elie", "Kingsley"];
console.log("These are the instructors: " + instructors);

let instructorsCopy = instructors;
console.log("This is the reference instuctors to instructorsCopy: " + instructorsCopy);

instructorsCopy.push("Tim");

console.log("This is the instructorsCopy with an additional instructor added to the array: " + instructorsCopy);
console.log("The original instructors variable is changed as well as the two variables reference each other: " + instructors);


console.log(" ");		


// EXERCISES
// PART 1
// create empty array
let arr12 = [];

// add your first name to the variable
arr12.unshift("Kingsley");
console.log(arr12);

// add your last name to the end of the arr variable
arr12.push("Cross");
console.log(arr12);


// add your favorite color to the beginning of the variable
arr12.unshift("green");
console.log(arr12);

// remove your favorite color from the arr variable
arr12.shift("green");
console.log(arr12);

console.log();


// create another array
let arr13 = [];
console.log(arr13);

// add your favorite number
arr13.unshift(777);
console.log(arr13);

// add string "JavaScript" to the end of the array
arr13.push("JavaScript");
console.log(arr13);



// see if value 42 exists in the array.  Do this using the indexOf method.  What does indexOf return to you if the value passed to it can not be found in the array?
arr13.indexOf(42);
console.log(arr13.indexOf(42));		// -1 is returned
console.log(arr13);

// create new variable which is the result of your arr and arr13 variables combined into one array
let combinedArr = arr.concat(arr13);
console.log(combinedArr);

console.log();


// PART 2
let arr14 = ["JavaScript", "Python", "Ruby", "Java"];
console.log(arr14);

// return Python and Ruby
arr14.shift();
arr14.pop();
console.log(arr14);

// combine the array with the array Haskell and Clojure
let arr15 = ["Haskell", "Clojure"];

let combo = arr.concat(arr15);
console.log(combo);



// return the string "JavaScript, Python, Ruby, Java"
console.log(arr15);
arr15.unshift("JavaScript");
arr15.push("Java");
console.log(arr15);



// explain in your own words what the difference is between passing by value vs. passing by reference
/*
As I rewrote within the console
- Value types can change without changing original value from where it copied from (via variables)
- Reference types when changed changes the original from where it is referencing from (objects or array (an object type))
*/ 
