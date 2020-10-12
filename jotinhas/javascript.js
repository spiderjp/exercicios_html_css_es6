//Rodará somente a parte moderna do JS.

"use strict";


// media >= 5.75 Aprovado
// media <= 5.75 Reprovado


let media = Number(prompt('Digite sua média: '));

if(media >= 0 && media <= 10){
if (media >= 5.75){

    alert('Aprovado!');

}

else{
    alert('Reprovado!');
}
}else{
    alert("Nota Errada!");
}


let x = 10;

//If ternário, de uma linha, usado somente em certo casos por ter respostas curtas, ? = então e : senão.

let resp = (x <= 10)? "correto" : "errado";
alert(resp)

//Usada somente com sinal de operador lógico de comparação, o If usa todos os operadores lógicos.


//Solicitar data e descobrir o dia da semana, transformar o número do dia da semana para string (extenso).

let obj_data = new Date();
const dia_semana = obj_data.getDay();


switch(dia_semana){
    case 0: alert("Domingo");break;
    case 1: alert("Segunda");break;
    case 2: alert("Terça");break;
    case 3: alert("Quarta");break;
    case 4: alert("Quinta");break;
    case 5: alert("Sexta");break;
    case 6: alert("Sábado");break;


}
