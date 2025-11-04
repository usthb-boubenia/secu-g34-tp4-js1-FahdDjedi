"use strict";

// Constantes utilisées par les fonctions
const lastName = "John";
const firstName = "Doe";
const age = 30;
const note = 15;
const pi = 3.14;

// f1..f6: chaque fonction affiche une valeur dans la console
function f1() {
  console.log(lastName);
}

function f2() {
  console.log(firstName);
}

function f3() {
  console.log(`${lastName}-${firstName}`);
}

function f4() {
  console.log(age);
}

function f5() {
  console.log(note);
}

function f6() {
  console.log(pi);
}

// Liaison des boutons aux fonctions demandées
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("btn-nom").addEventListener("click", f1);
  document.getElementById("btn-prenom").addEventListener("click", f2);
  document.getElementById("btn-nom-prenom").addEventListener("click", f3);
  document.getElementById("btn-age").addEventListener("click", f4);
  document.getElementById("btn-note").addEventListener("click", f5);
  document.getElementById("btn-pi").addEventListener("click", f6);
});