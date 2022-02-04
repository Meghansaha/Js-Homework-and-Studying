// Types of Functions Notes

//Performing a task
function greet(name,mood) {
    console.log('What up ' + name + '!?!?\n'+
    'Mood: '+mood) 
} 

greet('Meghan','Tired');

//Calculating a values

function square(number) {
    return number * number; //How you return the value/output to the user (similar to R)
}

// This function alone does the calcuation, but it can be stored in this case to print the result

let specialNumber = square(5);

console.log(specialNumber);

// We don't need to store it in a variable to print to the console though:

console.log(square(34))

