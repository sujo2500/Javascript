"use strict";

/*Arrayer*/
// Av Susan Johansson, 2026

let maträtter = ["pasta", "pizza", "fisk", "vegetarisk", "sallad"];
console.log(maträtter.length);
console.log(maträtter[0]);
console.log(maträtter[5]); //för att se det sista elementet i arrayen. men insåg att arrayen startade på 0.
console.log(maträtter[4]);
maträtter.push("soppa"); //lägga tll sallad i arrayen
maträtter.shift();// ta bort det första elementet i arrayen
console.log(maträtter); //dubbelkolla vad som finns i arrayen
