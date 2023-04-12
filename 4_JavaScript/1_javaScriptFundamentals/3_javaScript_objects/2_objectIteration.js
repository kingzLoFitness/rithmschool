console.log("----- Object Iteration -----");
/*
Objectives:
- understand how to iterate through an object using a for...in loop
- determine if a key exists in an object using an if...in statement
*/

console.log("----- Looping over Objects -----");
// iteration (looping)
// individual printing of all values in an object, one per line
console.log(""); 

let obj = {
	firstName: "Kingsley",
	lastName: "Cross",
	favoriteColor: "green",
	job: "programmer",
	isDeveloper: true
};

console.log(obj.firstName);
console.log(obj.lastName);
console.log(obj.favoriteColor);
console.log(obj.job);
console.log(obj.isDeveloper);

console.log("\n\n\n\n");


// looping a better idea

console.log("----- Looping over the keys in an object -----");
console.log("----- for in loop -----");
console.log("");

let instructor = {
	name: "Matt",
	mathWizard: true,
	dogOwner: true
};

// use of for in loop
/*
- in this example, singleKey is a variable that will be assigned to each key in the instructor object.  
- to access the key's value, we must use the bracket notation
- NOTE: Seems like we can use any variable name
*/
for(let singleKey in instructor) {
	console.log(instructor[singleKey]);
}

console.log("\n\n\n");




console.log("----- if in loop -----");
// sometimes we just want to check and see if a certain key exists in an object
console.log("");

let obj2 = {
	favoriteNumber: 33,
	favoriteColor: 'blue'
};

if ("favoriteNumber" in obj2) {
	console.log("The favoriteNumber key exists!");
}
if ("nothing" in obj2) {
	console.log("The nothing key exists!");
} else {
	console.log("The nothing key actually doesn't exists!");
}

console.log("\n\n\n\n\n");


console.log("----- Exercises -----");
console.log("");

let namesAndHobbies = {
	elie: "JavaScript",
	matt: "jogging",
	janey: "table building",
	tim: "sailing"
};
/* 
1. write code to print the value then the key to the console separated by '=>';

Output should be:
JavaScript => elie
jogging => matt
table building => janey
sailing => tim
*/
// so the created variable singleKey, or any named variable within the for in, is assigned to each key...
for (let singleKey in namesAndHobbies) {
	console.log(namesAndHobbies[singleKey] + " => " + singleKey);
}

console.log("*************************************");


// 2. Add a key for your name, and a value for your favorite hobby to the namesAndHobbies object
namesAndHobbies.kingsley = "gymnasticStrengthTraining";

console.log(namesAndHobbies);
console.log("*************************************");

console.log("");

// 3. Write an if statement that console.logs your name and hobby to the console 
// 		- if the key of your name is contained in the object
if ("kingsley" in namesAndHobbies) {
	
	// received information to access key, fourth answer down, here: http://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object
	console.log(Object.keys(namesAndHobbies)[4] + " => " + namesAndHobbies["kingsley"]);

	console.log("kingsley: " + namesAndHobbies.kingsley);

	// console.log("Indirectly, " + namesAndHobbies.kingsley + " is for you.");
} else {
	console.log("That key does not exist.");
}
