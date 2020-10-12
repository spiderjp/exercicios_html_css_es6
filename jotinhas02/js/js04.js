"use strict";

let elemento1 = document.querySelector("#txtv1");
let elemento1 = document.querySelector("#txtv2");


elemento1.addEventListener("keypress", validarValor);
elemento2.onkeypress = validarValor;

function validarValor(event){

    console.log(event.charCode)
    return ((event.charCode >= 48 && event.charCode <= 57) || event.charCode == 46)? true: event.preventDefault(); //preventDefault cancela qualquer ação, é como se fosse um falso.
};

document.querySelector("#btn1").addEventListener("click", function(){
    let valor1 = Number(elemento1.value);
    let valor2 = Number(elemento1.value);
    document.querySelector("#resposta").value = (valor1+valor2);
});