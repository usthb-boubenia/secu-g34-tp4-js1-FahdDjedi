"use strict";

const Students = [
    { mat: 1000, prenom: "JOHN", nom: "DOE", note1: 14, note2: 5 },
    { mat: 2000, prenom: "BOB", nom: "CARLTON", note1: 7, note2: 1 },
    { mat: 3000, prenom: "RAYANE", nom: "SMITH", note1: 13, note2: 3 },
]

//function A qui appelle B
function A () {
    Students.forEach(student =>{
        let delib = B(student.mat);
        if (delib){
            console.log(`${student.mat} : ADMIS`);
        }else{
            console.log(`${student.mat} : AJOURNE`);
        }
    });
    
}

//function B prendre un seul paramètre de type float, et retourner un booléen
function B (matricule) {
    let student = Students.find(student => student.mat === matricule);
    if (!student) {
        console.error("Eleve inconnu");
        return false;
    }
    let moyenne = (student.note1 + student.note2) / 2 + 5;
    if (moyenne >= 10) {
        return true;
    }else{
        return false;
    }
}

//liaison du bouton à la fonction A
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btn-Délibération").addEventListener("click", A);
});

