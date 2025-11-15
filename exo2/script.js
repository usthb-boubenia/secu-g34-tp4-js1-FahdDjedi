"use strict";

// Constantes demandées
const tableauEtudiants = [ // slide n°51 : const | slide n°40 : Tableau
  "Etudiant1",
  "Etudiant2",
  "Etudiant3"
];

const objetEtudiant = { // slide n°51 : const | slide n°40 : Objet
  nom: "John",
  prenom: "DOE",
  age: 30
};

const tableauObjetsEtudiants = [ // slide n°51 : const | slide n°40 : Tableau d'Objets
  { nom: "nom1", prenom: "prenom1", age: 21 },
  { nom: "nom2", prenom: "prenom2", age: 22 },
  { nom: "nom3", prenom: "prenom3", age: 23 }
];

//affichage du tableau d'etudiants
function f1() { // slide n°45 : function
    tableauEtudiants.forEach((nom) => { // slide n°44 : forEach
        console.log(nom); // slide n°33 : console.log
    });
}

//affichage de l'objet etudiant
function f2() { // slide n°45 : function
    console.log(objetEtudiant); // slide n°33 : console.log
}

//affichage du tableau d'objets etudiants
function f3() { // slide n°45 : function
    tableauObjetsEtudiants.forEach((etudiant) => { // slide n°44 : forEach
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`); // slide n°33 : console.log
    });
}

