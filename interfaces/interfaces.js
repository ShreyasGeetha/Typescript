// creating an object as a type in typescript
// below function takes object as parameter, disadvantage is if the object list grows it will be really hard to maintain
function personName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Hello',
    lastName: 'World'
};
personName(p);
function personDetails(person) {
    console.log(person.firstName + " " + person.lastName);
}
personDetails(p);
