"use strict";

document.querySelector("#btn1").addEventListener("click", function(){

    let info = document.querySelector("#texto").value; // Formulário é mais básico, não precisa do .innerHTML e sim do .value;
    inverter(info);
    inserirSimbolo(info, "*");

});

function inverter(srt){

    let saida = "";

    console.log(str.length);
    for(let i=str.length-1; i>=0; i--){
        saida += str[i];
    }

    alert(saida);

}

function inserirSimbolo(str, simbolo){

    let saida = "";
    for (let i=0; i< str.length-1; i++){
        saida += str[i] + simbolo;
    }

    saida += str[str.length-1];
    alert(saida);
}