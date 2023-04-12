console.log("----------- Object Basics ---------------");
/*
Objectives

- compare/contrasts objects and arrays, 
- and explain good use cases for each one
- iterate over arrays and objects
- add and remove properties/elements from objects

- Objects allow you to map keys to values (mappings)
*/



console.log("----------- Introduction ---------------");


console.log("*************\nThis is a test for the Objects being created");



// example declaring an object
let firstObj = {
	firstName: "Kingsley", 
	lastName: "Cross",
	aka: "kingzLoFitness",
	isInstructor: true
};

console.log(firstObj);
console.log("");



let secondObj = {
	firstName: "Seriah",
	lastName: "Cross", 
	aka: "riah",
	isInstructor: false
}

console.log("******* Second Object ******************\n" + secondObj + "\ndoes not show the objects as far as I see.  \n");
console.log(secondObj);


console.log("******************END OF SECOND OBJECT******************\n\n\n\n");


// now how do I use this in the real world
console.log("Hello, my name is #" + firstObj.aka + ". We are here to serve you.  We are also known as you, " + firstObj.firstName + " " + firstObj.lastName + ". \nWhatever you wish, 'LOFTY', etc., you shall recieve...");
// alert("CodeElephant: Hello, my name is #" + firstObj.aka + ". We are here to serve you.  We are also known as you, " + firstObj.firstName + " " + firstObj.lastName + ". \nWhatever you wish, 'LOFTY', etc., you shall recieve...");

console.log("");

console.log("High my name is " + secondObj.firstName + " " + secondObj.lastName);
console.log("I'm also known by my mommy as " + secondObj.aka);
console.log("As for being an instructor, the answer is " + secondObj.isInstructor + ".  I'm still a child and a student (as we ALL are).");
console.log("");
console.log("");
console.log("");
console.log("");

console.log("");
console.log("");

console.log("");
console.log("");





console.log("----------- Accessing Object Values ---------------");
// access the values using the object's keys
console.log("in dot notation");

firstObj.firstName;
console.log(firstObj.firstName);

firstObj.lastName;
console.log(firstObj.lastName);

firstObj.isInstructor;
console.log(firstObj.isInstructor);

firstObj.keyDoesntExist;
console.log(firstObj.keyDoesntExist);
console.log("");

// or we can use the bracket notation
console.log("in bracket notation");

firstObj["firstName"];
console.log(firstObj["firstName"]);

firstObj["lastName"];
console.log(firstObj["lastName"]);

firstObj["isInstructor"];
console.log(firstObj["isInstructor"]);

firstObj["keyDoesntExist"];
console.log(firstObj["keyDoesntExist"]);

// NOTE: We will learn the difference between these two later
console.log("");
// objects are one of the built-in types in JavaScript and consists of unordered key-value pairs
let kingsley = {
	name: "Kingsley",
	dogOwner: false, 
	carOwner: false
};
console.log(kingsley);

console.log("");
console.log("");
console.log("");
console.log("");
console.log("");


console.log("------ Bracket Notation vs. Dot Notation ----------");
/* to access values in the object, it can be done in two different ways: either using brackets [{}] or dot notation.
- best practice is to use the dot notation if you can use it
- there are cases in which you'll need to use bracket notation
*/
let child = {
	firstName: "Seriah",
	lastName: "Cross",
	favoriteColor: "purple",
	wantToDo: "gymnastics",
	isDeveloping: true
};

console.log(child);

child.firstName;
console.log(child.firstName);

child["lastName"];
console.log(child["lastName"]);

child["favoriteColor"];
console.log(child["favoriteColor"]);

console.log("");

console.log("Example of my daughter, " + child.firstName + " " + child["lastName"] + ", and her wanting to do " + child.wantToDo + ".");



console.log("");

/*
cases in which you'll need to use bracket notation.  Examples below

*/
let obj = {};
let person = "Tom";			// person and "Tom" can now be used as an object key
obj[person] = "This is a person";
obj[1+1+1] = "Three";

console.log(obj);

/*
obj.3;		// syntax error
console.log(obj.3);
*/

// we need to use bracket notation
obj[3];
console.log(obj[3]);		// output is "Three"

obj[person];
console.log(obj[person]);

// remember as stated above, person and "Tom" can be stated as object keys
obj["Tom"];
console.log(obj["Tom"]);

obj.person;
console.log(obj.person);

console.log("");

/*
NOTE for above code(s) ^^^: I had to minimize the font size to get the bigger picture of Sublime's window and Sublime's JavaScript console to see the bigger picture.  It almost reminds me of the talk from Disney animator 
*/









console.log("--------- Keys Are Always Strings in JavaScript --------");
/* i
t is important to note that the type of a key in JavaScript is always a string. 
- the following object of some employee id to the employee name:
- NOTE: so like strings, you cannot have a number as the first part of the wording for the key in dot notation, but you can access via bracket notation

- Every key in a JavaScript object is a string, automatically converting number into string
*/
let idToName = {
	754: "Tim",
	843: "Matt",
	921: "Janey",
	192: "Elie",
	"777": "Kingsley",		// i just put the key numbers in quote to test below, but it still could not be accessed via dot notation
	a777: "snyDah"
};

console.log(idToName);

// access the key for yourself
/*
idToName.777;
console.log(idToName.777);
*/
// the above code causes error so it is commented out

console.log("");

// instead we need to use bracket notation
idToName["777"];
console.log("idToName[\"777\"] in bracket notation is the way to access: " + idToName["777"]);


console.log("");

// but when adding a letter before the number, it can get access via dot notation
console.log("// but when adding a letter before the number, \nit can get access via dot notation, such as: \nidToName.a777, we get: "); 
console.log(idToName.a777);

console.log("");



// not a good way to add to idToName
idToName = { a777: "aliasName"};
console.log(idToName);

console.log("");









console.log("----- Adding to Objects -----");
/*
To add properties or functions(which are sometimes called methods) to our objects, we can use the . or [] operator (as before, the dot notation is preferred, but not always possible.)
*/
let obj2 = {
	name: "Jon Snow",
	watchMember: true
};
console.log(obj2);

console.log("");


obj2.gameOfThrones = "awesome";
console.log(obj2);

console.log("");









console.log("----- Removing from Objects -----");
// using delete keyword
let obj3 = {
	name: "Elie",
	job: "Instructor"
};
console.log(obj3);

delete obj3.job;		// returns true

console.log(obj3);


console.log("");











console.log("----- Exercises -----");
// 1. Create an object that has your firstName, lastName, and occupation as keys.
let myInfo = {
	firstName: "Kingsley",
	lastName: "Cross",
	occupation: "JavaScript Developer"
};


// 2. Acces each value from your object using both dot notation and bracket notation.
myInfo.firstName;
myInfo.lastName;
myInfo.occupation;

console.log(myInfo.firstName);
console.log(myInfo.lastName);
console.log(myInfo.occupation);

console.log("");

myInfo["firstName"];
myInfo["lastName"];
myInfo["occupation"];

console.log(myInfo["firstName"]);
console.log(myInfo["lastName"]);
console.log(myInfo["occupation"]);

console.log("");

// 3. Add a key hobby to your object.  Remove the key and value for occupation.
console.log(myInfo);
console.log("");

myInfo.hobby = "drawing";
delete myInfo.occupation;
console.log(myInfo);


/*
4. What is the difference between dot notation and bracket notation?
- you cannot use numbers with dot notation
- example with person = "Thom", where both person and Thom can be accessed via object.
*/

