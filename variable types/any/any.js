/**
 * if you are not sure of the type, then you can use any type
 */
var number = 10;
//assigning boolean type and string type does not throw error
number = true;
number = 'hello';
var anyVariable = 10;
// this does not throw an error because of any type. But the purpose of typescript is defeated here
anyVariable.toUpperCase();
anyVariable.name;
anyVariable();
/**
 * to esnure we cannot call any property types, call or construct them - we have unknown type
 */
var a = 10;
//below code would throw error
// a.toUpperCase()
// correct way of declaring is
a.toUpperCase();
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" && "name" in obj;
}
// before we use the property name, we check and use so that it does not throw error
if (hasName(a)) {
    console.log(a.name);
}
