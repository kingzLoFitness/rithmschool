// Dom Manipulation

/*
Modifying properties and attributes on elements in the DOM
- we can change the text of an element through the innerHTML property
*/
var firstDiv = document.getElementsByTagName("div")[0];

firstDiv.innerHTML = "Just changed!";



// this can also be done using the innerText property
var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.innerText = "Just changed again!";





var firstDiv = document.getElementsByTagName("div")[0];

firstDiv.style.color = "red";

// these two are the same (similar to calling an array)
firstDiv.style.backgroundColor = "teal";
firstDiv.style["backgroundColor"] = "purple";



var body = document.getElementById("container");

/*
- access/modify attributes on elements
- we can do that with getAttribute and setAttribute
*/

body.getAttribute("id");
body.setAttribute("id", "new_container");
body.getAttribute("id");


// we can also add and remove classes to elements using classList
// this is similar to push and pop, but classList is not an array 

var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.classList;

// add another class
secondDiv.classList.add("anther_class");

secondDiv.classList;

// removes hello class that was originally there
secondDiv.classList.remove("hello");

secondDiv.classList;



// NODES vs. ELEMENTS (continued from here: https://www.rithmschool.com/courses/intermediate-javascript/javascript-dom-manipulation)


