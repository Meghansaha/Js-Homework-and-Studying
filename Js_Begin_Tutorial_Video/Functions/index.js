// Functions Notes
//Functions are a fundamental building block in js (it does something)

//Declaring/making a function:
function greet() {
    console.log('What it do BOOOO!?');
} // No semicolon is need at the end because we are not declaring it like a variable

greet();

//functions can have inputs (parameters (i.e name))
function greet(name,mood) {
    console.log('What up ' + name + '!?!?\n'+
    'Mood: '+mood) // Using a plus sign 'pastes' things together
} 

// The value placed into this function is an "argument" (value for the name parameter)
//An argument is a value passed to a parameter
greet('Meghan','Tired')