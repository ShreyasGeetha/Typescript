export { }
// Giving set of names for numeric values


// in the below code, value 0 is given to c, 1 for java and 2 for typescript
enum languages { c, java, javascript, typescript }

// here we are declaring a variable 'l' which of enum type
let l: languages = languages.java
// the output will be printed as 1, as number assignment starts from 0
console.log(l)

// we can change the starting index of enum as well 
enum languages { cobol = 10, react, vue }

let lang: languages = languages.react

// now lang will print 11, as the starting number assignment is from 10
console.log(lang)