"use strict";

let frukt = ["äpple", "banan", "melon", "ananas"]
let mat = ["pasta", "ris", "sallad", "pizza"]
frukt.push("mango");
console.log(frukt);

console.log(mat);
console.log(frukt[2]);
frukt.push("persika");
for (let i = 0; i < 6; i++) {
    console.log(frukt[i]);
}

console.log(mat[1]);

console.log(frukt.length);


frukt.pop();
frukt.shift();

console.log(frukt.length);
for (let i = 0 ; i<5; i++) {
    console.log(frukt[i]);
}
frukt.push("kokosnöt");

console.log(frukt[4]);
frukt.shift();

for (let i = 0; i<6; i++) {
    console.log(frukt[i]);
}

mat.push("kyckling");

for (let i = 0; i <6; i++) {
    console.log(mat[i]);
}