//Objects in Javascript
// An object is one of the reference types (objects, arrays, functions)

//Object = Think of it like a person with multiple characteristics attached.

//Person object with 2 key value pairs
let person = {
    name: 'Meghan',
    age: 31,
};

//You can change exsiting values in objects in two ways:
// Dot Notation
person.name = 'Meghan Harris';

console.log(person.name);

//or Bracket Notation
person['age'] = 32;

console.log(person['age']);

// Brackets vs. Dots feels like Brackets vs. Dollars Signs in R
//Dot notation "looks" more consicse so is best practice to use
//However, you can use brackets when you don't know which variable is the target
//Use case could be when user is defining the targeted variable at runtime:

let selection = 'name'
let nickname = 'The Baddest Bitch'

person[selection] = nickname

console.log(person)
