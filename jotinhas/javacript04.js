"use strict";
let qtd_m = 0;
let qtd_f = 0;
let somaAlturaM = 0;
let somaAlturaF = 0;
 
document.querySelector("#btn1").addEventListener("click", function(){
    let gen = document.querySelector("#genero").value;
    let altura = Number(document.querySelector("#altura").value); 
    if (gen == "0"){
        qtd_m++;
        somaAlturaM = somaAlturaM + altura;
    }else if (gen == "1"){
        qtd_f++;
        somaAlturaF += altura;
    } 
});
 
document.querySelector("#btn2").addEventListener("click", function(){
    document.querySelector("#m").innerHTML = "M = " + qtd_m;
    document.querySelector("#f").innerHTML = "F = " + qtd_f;
});
 
//declaração de funçao
function calcMedia(soma,qtd){
    return soma/qtd;
}
 
//arrow function
let calcMediaArrow1 = (soma,qtd)=>{ 
    return soma/qtd;
};
let calcMediaArrow2 = (soma,qtd)=> soma/qtd;
 
document.querySelector("#btn3").addEventListener("click", function(){
    document.querySelector("#media_m").value = calcMedia(somaAlturaM, qtd_m);
    document.querySelector("#media_f").value = calcMediaArrow1(somaAlturaF, qtd_f);
});