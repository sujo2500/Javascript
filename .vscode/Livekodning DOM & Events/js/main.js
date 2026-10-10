"use strict";

const userFormEl = document.querySelector("#user-form");
const nameInputEl = document.querySelector("#name");

nameInputEl.addEventListener("keydown", onEvent)

function onEvent() {
    alert("Eventet är triggat!");
}
