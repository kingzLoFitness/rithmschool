/**
 * Syntax Error Correction
 * example(s) within javaScriptErrors.md
 */


let x = "hello";

let wrongObj = {
    name: "foo",
    missingComma: true
};

console.log(wrongObj.name);

console.log(wrongObj.missingComma);

console.log()


/**
 * ReferenceError Correction
 * 
 */
let amazing;    // ReferenceError - does not exist in the global scope

function defineSomething() {
    let secret = "I'll never tell";
}

defineSomething();

let secret; // ReferenceError - only exits in the scope of the of the defineSomething function 


console.log()

// function created to get out of type error
function undefined() {

};

undefined(); // Type Error - udefined is NOT a function!

let obj = {
    name: "Kingsley", 
    something: "Computer"
}

console.log(obj.name);

obj.something; // this acutally returns undefined!  What does that tell us?  If you try to access a property on an object and it does not exit, you do NOT get a ReferenceError, you just get undefined
console.log(obj.something);

obj.something.foo; // but when you try to acces a property on 'undefined'...  well that's a TypeError.
console.log(obj.something.foo);  // says undefined ?????

/*
obj.something(); // this is a TypeError for the same reason that undefined() is, since obj.something is undefined!
*/

// NOTE: Error messages starts from the bottom up.?????


console.log();



/*
This is a loop that I had to comment out due to it being more advanced (Recursion) and less likely to encounter, if not used .....

function callMe(){
    callMe();
}

callMe();  // maximum call stack size exeeded.  We will talk more about the call stack and recursion in a later section.

*/

