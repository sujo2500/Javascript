"use strict";

/*Objekt*/
// Av Susan Johansson, 2026

let bok = {
    title: "Harry Potter.",
    author: "J.K. Rowling.",
    released: 1997.
};

function SkrivUtBokInfo(bok) {
    console.log("Title: " + bok.title +
        " Author: " + bok.author +
        " Released: " + bok.released);
}
SkrivUtBokInfo(bok);