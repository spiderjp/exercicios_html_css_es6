"use strict";

document.querySelector("#btn"),addEventListener("click", function(){

    let nota1, nota2, nota3, nota4, nota5;
    let faltas;
    
    nota1 = Number(document.querySelector("#n1").value);
    nota2 = Number(document.querySelector("#n2").value);
    nota3 = Number(document.querySelector("#n3").value);
    nota4 = Number(document.querySelector("#n4").value);
    nota5 = Number(document.querySelector("#n5").value);
    faltas = Number(document.querySelector("#f").value);

    let media = ((nota1 + nota2 + nota3 + nota4 + nota5 )/5);

    document.querySelector("#r").value = "Média:" + media + " Faltas: " + faltas;
   

});

