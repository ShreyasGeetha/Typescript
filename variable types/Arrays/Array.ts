/**
 * Arrays can be declared in two ways
 * 
 * there is no difference in the way it works - it just the preference of usage
 */

// Array declaration type 1
let arr: number[] = [1, 2, 3]

// Array declaration type 2
let arr2: Array<number> = [1, 2, 3]

/**
 * sometimes arrays can have multiple types in it, we can use the below syntax for such declarations
 */
// here the order and count of those type should match, else it will throw an error
let numAndStr: [string, number] = ['typescript', 3]

// if we try to run the below code, it will throw an error as the order of declaration should be string and a number but we have reversed it
// let numAndStr1: [string, number] = [3, 'typescript']

// executing below code will give error as well, because we have declared that array has only two elements - a string followed by number. But in target we have declared additional number(3 elements) in the array which causes it to throw error
// let numAndStr1: [string, number] = ['typescript', 3, 4]
