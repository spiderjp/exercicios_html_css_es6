"use strict";

//Utilizando o DOM, no caso no começo com o document (primeira parte)

let campo_div = document.querySelector("#relatorio");

//Zerei o que estava dentro 

campo_div.innerHTML = "";

for(let i = 0; i <=10; i++){
    for (let y=0; y<=10; y++){
        campo_div.innerHTML += `${i} X ${y} = ${i*y} <br>`;
    }
    campo_div.innerHTML += "<hr>";
}