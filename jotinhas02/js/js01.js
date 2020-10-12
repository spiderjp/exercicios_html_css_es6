"use strict";

let x = 4.12345;
let y = 5;

let z = Math.random()*100; //0-100

console.log(z);
console.log( (x/y) );
console.log( Math.ceil((x/y)) );
console.log( Math.floor((x/y)) );

let w = Math.round(Math.random()*100); //0.4 = para baixo, e 0.5 = para cima
console.log(w);

let raiz = Math.sqrt(80);
let raiz1 = parseFloat(raiz.toFixed(2)); // Aqui ainda será um número...

console.log(raiz);
console.log(raiz1);

console.log(raiz.toFixed(2)); //Mas virará uma string... 

