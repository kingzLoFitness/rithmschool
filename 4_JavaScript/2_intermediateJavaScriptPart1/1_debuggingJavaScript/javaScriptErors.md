# JavaScript Errors

## Objectives 

## What is an Error

## How Errors Work in JavaScript
[MDN - JavaScript Errors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Common JavaScript Errors

- SyntaxError - occurs when we make a mistake with our syntax:

        let x = "hello";

        let wrongObj = {
            name: "foo"
            missingComma: true
        };

    - NOTE: corrections made in javaScriptErrors.js for all of these JS Errors

---
- ReferenceError – occurs when we try to access a variable that does not exist in that scope. In the example below, we will try to access a variable called amazing which has not yet been initialized. We will then try to access a variable called secret outside of its scope. Let’s see what that looks like:

        
        let amazing;    // ReferenceError - does not exist in the global scope

        function defineSomething() {
            let secret = "I'll never tell";
        }

        defineSomething();
        let secret = "I'll never tell";

        let secret; // ReferenceError - only exits in the scope of the of the defineSomething function 

---
- TypeError – occurs when you make incorrect use of certain types in javascript. That could mean trying to invoke something that is not a function, or accessing properties on undefined. Here are some very common examples (many of them we guarantee you will make!)

        let obj = {
            name: "Kingsley"
        }

        obj.something; // this acutally returns undefined!  What does that tell us?  If you try to access a property on an object and it does not exit, you do NOT get a ReferenceError, you just get undefined

        obj.something.foo; // but when you try to acces a property on 'undefined'...  well that's a TypeError.

        obj.something(); this is a TypeError for the same reason that undefined() is, since obj.something is undefined!



---
- RangeError – occurs when we have a function that calls itself (also known as a recursive function). If we have too many functions that have been called (before they are returned) we run out of memory and cause a RangeError.

function callMe(){
    callMe();
}

callMe();  // maximum call stack size exeeded.  We will talk more about the call stack and recursion in a later section.