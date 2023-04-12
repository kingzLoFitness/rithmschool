// Array Exercises 
// For each of the exercises below, assume you are starting with the following people array.

var people = ["Greg", "Mary", "Devon", "James"];


// 1. Using a loop, iterate through this array and console.log all of the people.
for(i=0; i < people.length; i++) {
	console.log(people[i]);
}

// 2. Write the command to remove "Greg" from the array.
people.splice(0,1);
console.log(people);

// 3. Write the command to remove "James" from the array.
people.splice(2,1);
console.log(people);

// 4. Write the command to add "Matt" to the front of the array.
people.unshift("Matt");
console.log(people);

// 5. Write the command to add your name to the end of the array.
people.push("Kingsley");
console.log(people);

console.log("");

// 6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
for(i=0; i < people.length; i++) {
	console.log(people[i]);
	if(people[i] == "Mary") {
		break;
	}
}
console.log("");

// 7. Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
var copy = people.slice(2,4);
console.log(copy);

// 8. Write the command that gives the indexOf where "Mary" is located.
console.log("Mary is located within \"people.indexOf(\"Mary\")\"");
console.log(people.indexOf("Mary"));
console.log("");

// 9. Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log("Foo is located within \"people.indexOf(\"Foo\")\"");
console.log(people.indexOf("Foo"));




// 10. Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
var people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people.splice(2,1,"Elizabeth", "Artie");
console.log(people);

// 11. Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
var withBob = people.concat("Bob");
console.log(withBob);

 






