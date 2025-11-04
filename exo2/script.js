"use strict";

// Constantes demandées
const tableauEtudiants = [
  "Etudiant1",
  "Etudiant2",
  "Etudiant3"
];

const objetEtudiant = {
  nom: "John",
  prenom: "DOE",
  age: 30
};

const tableauObjetsEtudiants = [
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

//affichage du tableau d'etudiants
function f1() {
    tableauEtudiants.forEach((nom) => {
        console.log(nom);
    });
}

//affichage de l'objet etudiant
function f2() {
    console.log(objetEtudiant);
}

//affichage du tableau d'objets etudiants
function f3() {
    tableauObjetsEtudiants.forEach((etudiant) => {
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    });
}

//liaison des boutons aux fonctions
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-tableau").addEventListener("click", f1);
    document.getElementById("btn-Objet").addEventListener("click", f2);
    document.getElementById("btn-TableauObjet").addEventListener("click", f3);
});
