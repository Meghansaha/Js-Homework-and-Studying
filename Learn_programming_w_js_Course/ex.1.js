// Exercise 1 - Creating variables

let numberOfSeasons = 6;
let numberOfEpisodes = 12;

console.log("Number of Seasons:", numberOfSeasons);
console.log("Number of Episodes:", numberOfEpisodes);

let epiPerSeasons = numberOfEpisodes/numberOfSeasons;

console.log(epiPerSeasons, "episodes per season.")

//var is the "older" version of let. let seems to usually suffice.

// Modifying variables
//We can change them by...straight reassignment
let numberofDogs = 3;
console.log("We have", numberofDogs, "dogs!");

numberofDogs = 1;
console.log("Now we have", numberofDogs, "dogs!");

//We can also use arithmetic operators 
let numberofCats = 2;

let numberofPets = numberofDogs + numberofCats

console.log("We have", numberofPets, "pets!")

//And I'm assuming logical vectors? - Yes. this is similar to how R does it.

if (numberofDogs < 5){
    (console.log("You only have", numberofDogs,"dog!", "This is not enough!!!!"))};