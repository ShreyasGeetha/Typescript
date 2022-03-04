export { }
// types in typescript - boolean, number and string

//declaring a boolean variable
let doesLoveFood: boolean = true;

//declaring a numerical variable
let totalFoodies: number = 100;

//declaring a string variable
let favFoodieName: string = 'Shreyas'

// We can still use embedded expressions just as before
let quote: string = `I have head ${favFoodieName} say "good food can get you out of depression"` 

console.log(quote)

// if you uncomment below line, it will throw error due to types not getting matched
// favFoodieName = 10;

/**
 * Two main uses of using type script
 1. static type checking - code in line 19 will throw error, helps reduce production bugs
 2. Intellisense - with typescript only methods allowed on a particular type are shown 
 */

//  null and undefined types in typescript
// these two are subtypes of all other types - because using it directly is of not much use
let a: null = null;
let b: undefined = undefined

// so we can use null or undefined as shown below
let num: number = null;
let str: string = undefined; 
