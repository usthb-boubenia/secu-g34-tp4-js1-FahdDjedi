"use strict";

const Students = [ // slide n°51 : const | slide n°40 : Tableau d'Objets
    { mat: 1000, prenom: "JOHN", nom: "DOE", note1: 14, note2: 5 },
    { mat: 2000, prenom: "BOB", nom: "CARLTON", note1: 7, note2: 1 },
    { mat: 3000, prenom: "RAYANE", nom: "SMITH", note1: 13, note2: 3 },
]

//function A qui appelle B
function A () { // slide n°45 : function
    Students.forEach(student =>{ // slide n°44 : forEach
        let delib = B(student.mat); // slide n°51 : let | slide n°45 : Appel de fonction
        if (delib){ // slide n°42 : if
            console.log(`${student.mat}: ADMIS`); // slide n°33 : console.log
        }else{ // slide n°42 : else
            console.log(`${student.mat}: AJOURNE`); // slide n°33 : console.log
        }
    });
    
}

//function B prendre un seul paramètre de type float, et retourner un booléen
function B (matricule) { // slide n°45 : function
    let student = Students.find(student => student.mat === matricule); // slide n°51 : let | slide n°44 : find
    if (!student) { // slide n°42 : if
        console.error("Eleve inconnu"); // slide n°33 : console.error
        return false; // slide n°43 : return
    }
    let moyenne = (student.note1 + student.note2) / 2 + 5; // slide n°51 : let
    if (moyenne >= 10) { // slide n°42 : if
        return true; // slide n°43 : return
    }else{ // slide n°42 : else
        return false; // slide n°43 : return
    }
}

