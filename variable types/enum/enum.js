"use strict";
exports.__esModule = true;
// Giving set of names for numeric values
// in the below code, value 0 is given to c, 1 for java and 2 for typescript
var languages;
(function (languages) {
    languages[languages["c"] = 0] = "c";
    languages[languages["java"] = 1] = "java";
    languages[languages["javascript"] = 2] = "javascript";
    languages[languages["typescript"] = 3] = "typescript";
})(languages || (languages = {}));
// here we are declaring a variable 'l' which of enum type
var l = languages.java;
// the output will be printed as 1, as number assignment starts from 0
console.log(l);
// we can change the starting index of enum as well 
(function (languages) {
    languages[languages["cobol"] = 10] = "cobol";
    languages[languages["react"] = 11] = "react";
    languages[languages["vue"] = 12] = "vue";
})(languages || (languages = {}));
var lang = languages.react;
// now lang will print 11, as the starting number assignment is from 10
console.log(lang);
