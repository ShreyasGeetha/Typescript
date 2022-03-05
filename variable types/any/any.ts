/**
 * if you are not sure of the type, then you can use any type
 */

let number: any = 10

//assigning boolean type and string type does not throw error
number = true
number = 'hello'

let anyVariable: any = 10

// this does not throw an error because of any type. But the purpose of typescript is defeated here
// anyVariable.toUpperCase()
// anyVariable.name
// anyVariable()

/**
 * to esnure we cannot call any property types, call or construct them - we have unknown type
 */

let a: unknown = 10;

//below code would throw error
// a.toUpperCase()

// correct way of declaring is
// (a as string).toUpperCase();

function hasName(obj: any): obj is { name: string }{
  return !!obj && 
  typeof obj === "object" && "name" in obj
}

// before we use the property name, we check and use so that it does not throw error
if (hasName(a)) {  
  console.log(a.name)
}

let alpha;
alpha = 10;
alpha = true;

let beta = 10;
//statement below will cause an error because, it has already been assigned a number at declaration and now by default beta variable is considered as number type in line 46
// beta = false;

// variable having multiple types

//the below variable can accept two values either boolean or number
let multitype: boolean | number;
multitype = 10
console.log(multitype)
multitype = false
console.log(multitype)

//if we try to assign string to multitype - it throws an error
// multitype = 'hello'

/**
 * the difference between any and multitype is
 * in multitype you explicitly mention what types can be assigned to those variables
 * 
 * in any - all supported types can be used for that variable.
 * 
 * even with respect to intellisense, with multitype is shows options only with respected to the latest assigned type
 */


