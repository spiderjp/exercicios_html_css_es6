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

if(media<6.5 && faltas<15){
    document.querySelector("#r").value = "Aprovado!";
} 
else{

        if(media>=7.5 && faltas>=30){
            
            document.querySelector("#r").value = "Tome cuidado, fora aprovado!";

}else{

    document.querySelector("#r").value = "Reprovado!";

}}


   

});




/*"use strict";


document.querySelector("#btn").addEventListener("click", function(){

    let numbercampo1 = Number(document.querySelector("#campo1").value);

    if (numbercampo1 % 2 == 0){

        let resultcampo = document.querySelector("#campo2").value =  "Esse número por ser divisível por 2 é par.";
    } else{
        
        let resultcampo2 = document.querySelector("#campo2").value = "Esse número é indivisível por 2, logo é ímpar.";
    }

});
*/
