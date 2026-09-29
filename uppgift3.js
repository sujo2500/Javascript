"use strict";

/*Villkor*/
// Av Susan Johansson, 2026

let age = 5;

if (age < 18) {
    age = "Barn";
} else if (age >= 65) {
    age = "Pensionär";
} else if (age > 18 && age < 65) {
    age = "Vuxen";
}

console.log(age);