"use strict";

/*Sammanhängande program*/
// Av Susan Johansson, 2026

const people = [
    { name: "Alice", age: 30, city: "Malmö"},
    { name: "Bob", age: 25, city: "Göteborg"},
    { name: "Charlie", age: 35, city: "Västerås"},
    { name: "David", age: 16, city: "Jönköping"}
];

function SkrivUtInfoOmPerson(people) {
    if (people.age > 18) {
        console.log(people.name + " bor i " + people.city, "och är myndig");
    }
    else {
        console.log(people.name + " bor i " + people.city, "och är inte myndig");

    }
}

for (let i=0; i < people.length; i++) {
    SkrivUtInfoOmPerson(people[i]);
}