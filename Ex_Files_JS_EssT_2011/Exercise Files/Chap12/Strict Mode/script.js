"use strict";
// didn't use var
let foo = "Hello world";

// new object with two properties with the same name
function object() {
let myObject = { samename: 1, differentName: 2 };
    return myObject;
}
object();

// function with the same name for multiple parameters
function myFunction( a,b,c) {
   return a + b + c;
}
console.log(myFunction(1,2,3));

document.getElementById("mainContent").innerHTML = foo;



