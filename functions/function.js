// by default function parameters are considered as any
// here after function, when we say : number, it means it is returning a number type argument
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
// if we uncomment line 10 - it throws an error stating argument is of type string, where expected is number
// add(5,'10')
/**
 * optional parameter and default parameters
 *
 * in normal javascript, if you mention 2 parameters and pass only one argument to the function - by default the second parameter is taken as undefined but in TS it throws error
 */
function multiply(a1, a2) {
    return a1 * a2;
}
// code in line 24 throws error
// multiply(5)
// code in line 26 works very well
multiply(5, 10);
// if you want to pass optional parameter - put a question mark next to parameter as shown below
function divide(a1, a2) {
    return a1 / a2;
}
// code in line 34 will not throw error, as for second parameter we have declared it as optional - hence undefined will be assigned to it.
divide(5);
/**
 * default parameters are similar to optional parameters but only difference is - instead of undefined, a set of values are given to that parameter
 */
function randomNumber(a) {
    if (a === void 0) { a = 10; }
    return a;
}
// even though in line 44 we do not pass a random number, a default value of 10 is taken
randomNumber();
