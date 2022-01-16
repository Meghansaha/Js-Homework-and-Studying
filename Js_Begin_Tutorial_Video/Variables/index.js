// "var" used to be best practice for setting variables, but not the "let" declaration is more suitable
let name;
//Declarations need to be terminated with a semi-colon. Those SAS war flashbacks are coming back to me
console.log(name);

// Above variable is undefined, below has a string
let name2 = 'I\'d like to go on Vacation...now';
console.log(name2);

// Variables cannot be a reserved keyword (let, if, else, var, etc.)
// Should be meaningful. Should know what data is in the variable by the name
// Variable names can't start with a number
// Cannot contain a space or hypen
// camelCase is usually used. Case matters
// You can declare multiple variables on a single line, but best practice is that each var gets its own line:

let firstName = "Meghan";
let lastName = "Harris";

console.log(firstName, lastName);