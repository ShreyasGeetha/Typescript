"use strict";
exports.__esModule = true;
// Without the above export statement - typescript will treat this as a script(having global scope) and throw error
// With the empty export statement, this file will be treated as a module and the error goes away.
//Always check the changes in main.js
var greeting = 'Hello There !';
console.log(greeting);
