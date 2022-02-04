// Array Notes

// An array is an object that holds 'lists' of information
//square brackets ([]) are an array literal

let selectedColors = ['blue', 'purple'];

console.log(selectedColors); //Index numbering starts at ZERO!

//indexing is similar to R
console.log(selectedColors[1]); //Grabbing the second value at index # 1

//We can change the length and type of arrays at runtime as well (ref: dynamic typing)
selectedColors[2] = 'black';

console.log(selectedColors)

//You can also have different types of values within one array
selectedColors[3] = 3;
console.log(selectedColors)

//Because an array is an 'object' is has properties and key-value pairs we can access
console.log(selectedColors.length)
