"use strict";

let frutas = [];
frutas[0] = "Morango";
frutas[1] = "Uva";
frutas[2] = "Manga";
frutas[3] = "Lixia";

console.log( frutas );
console.log( frutas[2] );
console.log( frutas.length );

let meses = ["JAN", "FEV", "MAR", "ABR", "MAI", "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"];

let data_hora = new Date();
let mes_atual = data_hora.getMonth();
alert( meses[mes_atual] ); 

for(i=0; i< meses.length; i++){
    console.log( meses[i] ); 
}

//for..of

for(let mes of meses){
    console.log(mes);
}

//forEach

meses.forEach( (mes,index) => console.log(`${index+1}-${mes}`) );