console.log("--------- Nested Objects ---------------");	// separator

/*
Objectives: 
- create nested data structures using objects
- access the iterate over data in a nested data structure



What is a data structure?  A nested one?
- a data structure is a way of structuring data
- in computer science there are multitude of different data structures
	- the most efficient way to store data depends n how you intend to use the data
	- Do you just need to read the data?
	- or do you need to update it?
	- How larg e is your set of data?
	- and How quickly do you need to find things in it?

- Questions like these greatly influence what type of data structure you should be using

- fow now limited to "Object" and "Arrays" (within this intermediate level of study).  
- we've already seen how to use both of these structures to organize data 
- in this unit, even with just these two data structures, we can get pretty far in terms of storing and accessing complex data


What is nested data structure?
- One data structure inside of another
- Here are some examples 
*/


/***************************
// Objects within Objects
***************************/

var schools = {
	devryInstituteOfTechnology: {
		address: "North Ave NW, Atlanta, GA 30332", 
		phoneNumber: "(800) CAL-DVRY",	// the words to numbers for the phone number
		dateEstablished: "June 20, 2004" 
	},

	boroughOfManhattanCommunityCollege: {
		address: "New York, NY 11236",
		phoneNumber: "(800) GET-BMCC",
		dateEstablished: "August 15, 2000"
	}
};

// access an object within an object, using dot notation, just like in objects taht are not nested 
// this statement assigns the ojbect that is nested inside of the larger schools object to the gtObject variable
var gtObject = schools.devryInstituteOfTechnology;

// now that we have the gtObject variable
// use it to access keys within that object
console.log(gtObject.address); 
console.log(gtObject.phoneNumber); 
console.log(gtObject.dateEstablished); 

console.log("\n\n\n");


var gtObject2 = schools.boroughOfManhattanCommunityCollege;

console.log(gtObject2.address);
console.log("Ths is BMCC's number: " + gtObject2.phoneNumber);


console.log("END ************************************************");




/*
At the starting point I immediately caught the error before even looking at the error message.  it came from within gtObject.phoneNumber for within the object itself was missing a comma 
*/



// in fact, we don't even need the intermediate gtObject variable. 
// we can simply use the dot operator on the first statement like this
schools.devryInstituteOfTechnology.address;
console.log(schools.devryInstituteOfTechnology.address);

schools.devryInstituteOfTechnology.phoneNumber;
console.log(schools.devryInstituteOfTechnology.phoneNumber);

schools.devryInstituteOfTechnology.dateEstablished;
console.log(schools.devryInstituteOfTechnology.dateEstablished);



console.log("\n\n\n\n");



/***************************
// ARRAYS WITHIN OBJECTS
***************************/
// an object with an array as the value
// the favoriteHobbies "key" has a more complex "value", which is an array
var informalStudentData = {
	name: "Kingsley", 
	favoriteHobbies: ["GST", "KungFu", "Coding"]
};


// just like in the object within the objects example, we can access an element in the array by using the dot notation, and then access the array normally.  
// to get the first eleemnt in the array
informalStudentData.favoriteHobbies[0];
console.log(informalStudentData.favoriteHobbies[0]);

console.log(informalStudentData.favoriteHobbies[2]);




// How would you add another hobby to the favoriteHobbies array inside the object?




/***************************
// COMPLEX OBJECTS
***************************/
// an example that combines objects and arrays
var instructorData = {
	name: "Kingsley",
	additionalData: {
		instructor: false,
		favoriteHobbies: ["Playing Celo", "Tennis", "Coding"],
		moreDetails: {
			favoriteBasketBallTeam: "New York Knicks",
			numberOfSiblings: 5,
			isYoungest: false,
			hometown: {
				city: "Brooklyn",
				state: "NY",
			}, 
			citiesLivedIn: ["Brooklyn", "Manhattan"]
		}
	}
};

console.log("");
instructorData.name;
instructorData.additionalData.instructor;
instructorData.additionalData.favoriteHobbies[2];
instructorData.additionalData.moreDetails.favoriteBasketBallTeam;
instructorData.additionalData.moreDetails.hometown.state;
instructorData.additionalData.moreDetails.citiesLivedIn[1];

console.log(instructorData.name);
console.log(instructorData.additionalData.instructor);
console.log(instructorData.additionalData.moreDetails.favoriteBasketBallTeam);
console.log(instructorData.additionalData.moreDetails.hometown.state);
console.log(instructorData.additionalData.moreDetails.citiesLivedIn[1]);
console.log();


// and yes you will be working with data like this
// large amounts of data from third parties
// you will be given it in nested objects and/or arrays


console.log("\n\n\n\n");



/***************************
// Accessing and Setting values 
in nested objects
***************************/
/*
- when dynamically setting values in a nested object, you have to use the bracket notation.  
- in this example, we'd like to write a function that adds a key to the nested object
*/
var programmingLanguages = {
	java: {
		yearCreated: 1995, 
		creator: "James Gosling"
	},
	javaScript: {
		yearCreated: 1995, 
		creator: "Brendan Eich"
	}
}

function addProgrammingLanguage(nameOfLanguage, yearLanguageCreated, creatorOfLanguage){
	// how can we access the programming languageS object?
	// we can't use dot notation, because we don't know the name of the key until the function is called 
	// instead use the bracket notation where the key is the nameOfLanguage that is being passed to the function 
	programmingLanguages[nameOfLanguage] = {
		// creating the object which will be the value of the key 
		// we can directly assign the yearLanguageCreated
		// and creatorOfLanguage to the appropriate keys here
		yearCreated: yearLanguageCreated,
		creator: creatorOfLanguage
	}
}

// 
addProgrammingLanguage("ruby", 1995, "Yukihiro Matsuoto");

console.log(programmingLanguages.ruby);

// these I decided to test in addition
console.log(programmingLanguages);
console.log(programmingLanguages["ruby"]);


/* remember, that when adding keys to an object, if you do NOT know exactly what the name of the key will be (meaning that the key will be dynamically craeted), you HAVE to use the bracket notation. */


console.log("\n\n\n");


/***************************
 Writing functions to produce 
 values in a nested data structure 
 ***************************/
/*
- when you're interacting with a nested data structure, sometimes it's helpful to encapsulate some of your logic into a funciton
- this is expecially true if you'll need to manipulate the data structure in similar ways multiple times

- below are some examples of writing funcitons that interact with nested data structures in different ways
- we'll start with the same "instructorData" example from before
*/

var instructorData = {
	name: "Elie",
	additionalData: {
		instructor: true,
		favoriteHobies: ["Playing Cello", "Tennis", "Coding"],
		moreDetails: {
			favoriteBasketBallTeam: "New York Knicks",
			numberOfSiblings: 3,
			isYoungest: true,
			hometown: {
				city: "West Orange",
				state: "NJ",
			},
			citiesLivedIn: ["Seattle", "Providence", "New York"]
		}
	}
};





// Exercises
/*
Write some functions that operate on this nested data structure

- write a function called "displayCities" that console.logs all the values in the "citiesLivedIn array"


- write a function called "displayHometownData" that console.logs all the values inside of the "hometown object" 

- write a function called "addDetail" that accepts two parameters, a key and a value and adds the key and value to the "more details object" and returns the moreDetails object
	- example
		- addDetail("isHilarious", true);
		- addDetail("previousApartments", ["Mission", "North Beach", "Nob Hill"])


- write a function called "removeDetail" that removes a key in the "moreDetails" object and returns the "moreDetails object" (the new keys added above are not included in these examples).
	- example
		- removeDetail('citiesLivedIn');
		- removeDetail('hometown');
		- removeDetail('favoriteBasketballTeam');

When done compare to the:
SOLUTIONS... here:
https://www.rithmschool.com/courses/intermediate-javascript/javascript-nested-data-structures-objects
*/


