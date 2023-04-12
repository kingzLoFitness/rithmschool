
console.log("------- Array Basics --------");	// separator

/* THESE ARE SNIPPETS 
- (files within a file thats Samples of code)
- Practical Reference
- can be reused
*/

console.log(" ");
/*
Objectives
By the end of this chapter, you should be able to:

Create a JavaScript array
Access elements in an array
Modify the values stored in an array
Use push and unshift to add elements to an array
Use pop and shift to remove elements from an array
Use splice for more advanced array modifications


Sometimes, however, you need a more complex data structure when building your application. For example, maybe you need a list of restaurant names so that you can display each one to a user when she's looking for a place to eat nearby. Or maybe you're doing some math and want to maintain a list of prime numbers. It would be pretty annoying to have to write
*/


/*
let firstPrime = 2;
let secondPrime = 3;
let thirdPrime = 5;
let fourthPrime = 7;
let fifthPrime = 11;

Thankfully, JavaScript provides you with a data type to help in these situations: the array. You can think of an array as simply a list of values.
*/

// variable is now working as an array
let prime = [2, 3, 5, 7, 11];
console.log(prime);
console.log("Here are the numbers in primes's array: " + prime);
console.log("");


let names = ["Alice", "Bob", "Charlie"];

// calling the variables via console
console.log(names);
console.log("That shorty " + names[0] + " go with that dude " + names[1] + " and that other dude " + names[2] + ".");


console.log("");


let booleans = [true, false, false, true];
console.log("The various boolean within it's arrays " + booleans);


let mixedTypes = [1, "sweet", true, null, NaN, "bye!"];
console.log("the various mixedTypes of it's array " + mixedTypes);

console.log();


console.log("TESTING...\n" + 
	"TESTING...");
let woahhh = ["What's up with this? -->", ["Woah", "carzy!"]];
console.log(woahhh);
console.log("" + woahhh);
// additional code
console.log(woahhh[0]);
console.log(woahhh[1]);



// This is an ecsample via Mozilla on dimensional arrays
console.log("TESTING... \nTESTING... \nArray in Rows...");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections
let row0 = [[0,0],[0,1],[0,2],[0,3],[0,4]];

let row1 = [[1,0],[1,1],[1,2],[1,3],[1,4]];
let row2 = [[2,0],[2,1],[2,2],[2,3],[2,4]];
let row3 = [[3,0],[3,1],[3,2],[3,3],[3,4]];

console.log(row0[0]);
console.log(row0[1]);
console.log(row0[2]);
console.log(row0[3]);
console.log();

console.log("Row0:", row0[0], row0[1], row0[2], row0[3]);
console.log("Row1:", row1[0], row1[1], row1[2], row1[3]);
console.log("Row2:", row2[0], row2[1], row2[2], row2[3]);
console.log("Row3:", row3[0], row3[1], row3[2], row3[3]);

/*
So the question is...  Did I crack the code??? 
*/







console.log();

let emptyArray = [];
console.log("seeing this empty array" + emptyArray + "There should be an empty space.");
console.log("But there is not so the array being empty is literally empty, nothing; a blank space.");


typeof [1, 2, 3];
console.log("The typeof [1,2,3] is an " + typeof [1, 2, 3]);

console.log("\n\n\n");		







console.log("------- Accessing and updating array values --------");

console.log(" ");		


let arr = [5, 3, 10];
console.log(arr);

console.log("First array, arr[0]: " + arr[0]);
console.log("Second array, arr[1]: " + arr[1]);
console.log("Third array, arr[2]: " + arr[2]);
console.log("Fourth array, arr[3]: " + arr[3]);
console.log("");

console.log("arr[1+1], same as arr[2]: " + arr[1+1]);				// same as arr[2]
console.log("arr[arr.length-1, last element of array: " + 
			arr[arr.length-1]);		// last element of an array

console.log(" ");		




let arr1 = [5,3,10];
console.log("let arr = [" + arr1 + "]");
console.log("");

console.log("*****************************\n*****************************\nArray Change\n*****************************\n*****************************\n");

arr1[0] = -1000;
console.log("First array,0, has chaged to " + arr1[0]);
console.log(arr1);
console.log("");


// changed the 3rd array to dope 
arr1[2] = "dope";
console.log("Array 2 has changed to " + arr1[2]);
console.log(arr1);

console.log("\n\n\n");		





console.log("------- Adding to arrays --------");	
console.log(" ");		

let arr2 = [1,2,3];
console.log("Here is what is in the array currently: [" + arr2 + "]");

arr2[3] = 4;
console.log("Another addition to the array now it's: [" + arr2 + "]");


console.log(" ");		

// elements added to index, and elements that don't have values
let arr3 =[1,2,3];
console.log("Array before changes: [" + arr3 + "]");

arr3[5] = "whoa";
console.log("Output of array with no values [" + arr3 + "]");
console.log(arr3);


console.log("");

// push - add to the end of the array
let arr4 = [3,4,5];
console.log("ORIGINAL array values: [" + arr4 + "]");

arr4.push(7);
console.log("With the use of push: [" + arr4 + "]");

console.log("");

// unshift - add to the beginning of the array
let arr5 = [1,2,3];
console.log("***** Original array of numbers [" + arr5 + "]");

arr5.unshift(0);
console.log("With the use of unshift [" + arr5 + "]");
console.log("");

let arr6 = [1,2,3];
console.log("***** Original array again: [" + arr6 + "]");



console.log("*****************************\n*****************************\nUsing arr.length = 2\n*****************************\n*****************************\n");

// setting the array length to 2. So only 1 and 2 is the output for the array set
arr.length = 2;
console.log("Returns the new length: [" + arr + "]");

console.log("\n\n\n");		







console.log("------- Removing from arrays --------");	
console.log(" ");		


// pop - removes from the END of the array
let arr7 = [1,2,3];
console.log(arr7);

arr7.pop();
console.log("After the use of arr.pop() end of array, the results: [" + arr7 + "]");

// shift - also removes element, from the FIRST of the array
let arr8 = [1,2,3];
console.log("RESET: Removes the element from the front, with the use of arr.shift(): " + arr8.shift());
arr8;
console.log("After the removal of array from front: [" + arr8 + "]");

console.log("");

/* delete keyword, used to delete elements in an array, when using this keyword, the value at the index where you delete will simply be replaced by undefined (as if there is an empty value to fill in).  this usually isn't what you want, which is why you won't often see people use delete on arrays.  

It is more common to see this word used with objects, more on that in the next unit
*/

let arr9 = [5,4,3,2];
console.log(arr9);
console.log("Here is the original value for arr: [" + arr9 + "]");

delete arr9[1];
console.log("Here is the new value after \"delete arr[1]\": [" + arr9 + "]");


console.log("\n\n\n");		












console.log("------- Removing/Adding or both with splice --------");	
console.log(" ");		

/*
one of the more powerful array methods is splice, which allows you to either add to an array or remove elements or even do both.  You can think of splice as a  powerful generalization of push, pop, unshift, and shift all in one.

- The splice method accepts at least two arguments.
- The first argument is the starting index, indicating where values will be removed or added
- the second parameter is the number of values to remove

- optionally, you can pass in an unlimited number of additional arguments, these correspond to values you'd like to add to the array.
- splice method always returns an array of the removed elements.

- in other words.  
	1 removeStartingPosition
	2 numValues2Remove
	3 optionalPassInUnlimitedValues

--- Here are some examples:
*/

let arr10 = [1,2,3,4];
console.log(arr10);

console.log("");

// Removes the first array from the start and only one deleted
arr10.splice(0,1);
console.log("arr.splice(0,1);");
console.log("Splicing 0,1 values from 1,2,3,4 gives you: \n[" + arr10 + "]");
console.log("");


let arr11 = [1,2,3,4];

console.log(arr11);
// splicing like the top, and adding 5 in the front
arr11.splice(0,1,5);
console.log("arr.splice(0,1,5);");
console.log("Splicing 0,1, (and adding 5 in the front) values from 1,2,3,4 gives you: \n[" + arr11 + "]");
console.log("");

// take out from index1 2 items and add in 3 additional items
let arr12 = ["a", "b", "c", "d"];
console.log(arr12);
arr12.splice(1,2,"x","y","z");
console.log("arr.splice(1,2,\"x\",\"y\",\"z\");");
console.log("Splicing 1,2, (and adding x,y,z after index1) values from 'a','b','c','d' gives you: \n[" + arr12 + "]");



console.log("\n\n\n");		







console.log("------- Exercises --------");	
console.log(" ");		  


// create array with 3 elements
console.log("favoriteFoods");

let favoriteFoods = ["fruits", "vegetables", "peanut butter & jelly"];
console.log(favoriteFoods);
console.log("");

// access the second element
console.log("// access the second element");
favoriteFoods[2];
console.log(favoriteFoods[2]);
console.log("");

// change the last element to some other food
console.log("// change the last element to some other food");
favoriteFoods[favoriteFoods.length-1] = "oatmeal";
console.log("favoriteFoods[favoriteFoods.length-1] = \"oatmeal\";");
console.log(favoriteFoods);
console.log("\n\n");

// remove the first element and store it in a variable called formerFavoriteFood
console.log(favoriteFoods);
console.log("// remove the first element and store it in a variable called formerFavoriteFood, using shift()");
let formerFavoriteFood = favoriteFoods.shift();

console.log(formerFavoriteFood);
console.log(favoriteFoods);


console.log("");

// Add a favorite food to the back
console.log("// Add a favorite food to the back");
favoriteFoods.push("apples");

console.log(favoriteFoods);

console.log();

// Add a favorite food to the front
console.log("// Add a favorite food to the front");
favoriteFoods.unshift("bananas");

console.log(favoriteFoods);

console.log();

// what happens when you try to pop from an empty array?
console.log("// what happens when you try to pop from an empty array?");
let emptyArray1 = [];
emptyArray1.pop();
console.log(emptyArray1.pop());

/*
examples below, use splice to convert the first array to the second array:

- [2,3,4,5] -> [2,4,5]
- ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
- [10,-10,-5,-3,2,1] -> [10,9,8,7,6,5,4,3,2,1]
*/

// [2,3,4,5] -> [2,4,5]
let numbers = [2,3,4,5];
console.log(numbers);
numbers.splice(1,1);
console.log(numbers);

console.log("");

// ["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
let words = ["alpha", "gamma", "delta"];
console.log(words);
words.splice(1,0,"beta");
console.log(words);
console.log("");

// [10,-10,-5,-3,2,1] -> [10,9,8,7,6,5,4,3,2,1]
let num = [10,-10,-5,-3,2,1];
console.log(num);
num.splice(1,3,9,8,7,6,5,4,3);
console.log(num);
console.log("");

