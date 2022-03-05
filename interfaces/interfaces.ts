// creating an object as a type in typescript
// below function takes object as parameter, disadvantage is if the object list grows it will be really hard to maintain
function personName(person: { firstName: string, lastName:string }) {
  console.log(`${person.firstName} ${person.lastName}`)
}

let p = {
  firstName: 'Hello',
  lastName: 'World'
}

personName(p)

// More preferable approach is to use interfaces in typescript

// Now if we need to add phone number as parameter, if we add it in interface it will reflect in all places.
// if we want to make parameter optional, with just '?' character we can make the parameter optional. code is very handy and easy to understand
// where do we need this optional properties? in submitting forms - certain fields are non mandatory, those can be ignored here
interface details{
  firstName: string;
  lastName: string;
}

function personDetails(person: details) {
  console.log(`${person.firstName} ${person.lastName}`)  
}

personDetails(p)