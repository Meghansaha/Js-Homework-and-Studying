// Dynamic Typing Notes

let name = 'Meghan'; 
let age =31; 
let isAwesome = true; 
let firstName; 
let selectedColor = null; 

//We can check the type of our varaibles by using the 'typeof' function
let agetype = typeof age
console.log(agetype)

//Dynamic Typing means that the type of variables are determined at runtime.
//Meaning, we can easily change the type
age = 'thirty-one'
let agetype2 = typeof age
console.log(agetype2)
