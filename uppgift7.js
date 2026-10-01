"use strict";

/*Array och funktioner*/
// Av Susan Johansson, 2026

let siffror = [1, 2, 3, 4, 5, 6, 7]

function räknaAlla(siffror) {
    let resultat = 1;
    for (let i = 0; i < siffror.length; i++) {
        resultat = resultat * siffror[i];
    }
    return resultat;
}
console.log(räknaAlla(siffror));
