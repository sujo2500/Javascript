"use strict";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("color")
    .addEventListener("change", changeColor);
});

function changeColor() {
    //Läs in vald färg
    const color = document.getElementById("color").value;

    // sätt CSS-färg på body-taggen
    document.querySelector("body")
        .style.backgroundColor = color; 
}

function createMessage(name) {
    let message = "Hej " + name;
    console.log(message);
}

