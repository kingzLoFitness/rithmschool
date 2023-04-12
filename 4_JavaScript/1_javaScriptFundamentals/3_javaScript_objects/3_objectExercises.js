console.log("----- Object Exercises -----");

let programming = {
	languages: ["JavaScript", "Python", "Ruby"],
	isChallenging: true,
	isRewarding: true,
	difficulty: 8,
	jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

console.log(programming);
console.log();

// 1. Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go");
console.log(programming.languages);
console.log("");


// 2. Change the difficulty to the value of 7.
programming.difficulty = 7;
console.log(programming.difficulty);
console.log(programming);

console.log("");

// 3. Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes;
console.log(programming);
console.log("");

// 4. Write the command to add a new key called isFun and a value of true to the programming object.
programming.isfun = true;
console.log(programming);
console.log("");

// 5. Using a loop, iterate through the languages array and console.log all of the languages.
for (i = 0; i < programming.languages.length; i++) {
	console.log(programming.languages[i]);
}
console.log("");

// 6. Using a loop, console.log all of the keys in the programming object.
for (let key in programming) {
	console.log(key);
}

console.log("");

// 7. Using a loop, console.log all of the values in the programming object.
for (let key in programming) {
	console.log(programming[key]);
}




console.log(940 / 960);
