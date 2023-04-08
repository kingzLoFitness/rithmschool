// Dom Manipulation

/*
Modifying properties and attributes on elements in the DOM
- we can change the text of an element through the innerHTML property
*/
var firstDiv = document.getElementsByTagName("div")[0];

firstDiv.innerHTML = "Just changed!";

// This can also be done by innerText property
var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.innerText = "just changed again";

/*
What's the difference between innerHTML and innerText?  Go here: 
https://stackoverflow.com/questions/19030742/difference-between-innertext-and-innerhtml
*/





/*
Directly manipulate the CSS properties for elements (through inline styling) with the style property
*/
var firstDiv = document.getElementsByTagName("div")[0];

firstDiv.style.color = "red";
firstDiv.style.backgroundColor = "teal";



firstDiv.style["background-color"] = "purple";


// var body = document.getElementById("container");

/*
- access/modify attributes on elements
- we can do that with getAttribute and setAttribute
*/

/*body.getAttribute("id");
body.setAttribute("id", "new_container");
body.getAttribute("id");
*/

// we can also add and remove classes to elements using classList
// this is similar to push and pop, but classList is not an array 

/*var secondDiv = document.getElementsByTagName("div")[1];

secondDiv.classList;
*/
// add another class
/*secondDiv.classList.add("anther_class");

secondDiv.classList;
*/
// removes hello class that was originally there
/*secondDiv.classList.remove("hello");

secondDiv.classList;
*/


// NODES vs. ELEMENTS (continued from here: https://www.rithmschool.com/courses/intermediate-javascript/javascript-dom-manipulation)


