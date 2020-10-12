"use strict";

let tab = Number(prompt("Digite a tabuada: "));

//Repetição da variável i de iteração, i++ acrescente de um em um, i+=3 em diante aumenta de 3 em 3:

for(let i=0; i<=10; i++){

/*X é a string "X", antes teremos ${tab} para aparecer o valor da tabuada e depois ${i} para aparecer os valores de i, o sinal de = é uma string e ${tab*i} é o resultado da tabuada.*/

    console.log(`${tab} X ${i} = ${tab*i}`);

    //Ou : console.log(tab + "X" + i + "=" + (tab*i));
}


console.log("*****************************");

/*Repetição com While: Define a variável em cima depois o bloco com while e o teste é feito no começo para definir verdadeiro ou falso*/

let cont = 0;
while(cont <= 10){
    console.log(tab + "X" + cont + "=" + (tab*cont));
    cont++;
}


console.log("*****************************");


/*Repetição com do while: Ela roda pelo menos uma vez, por somente testar no final, ou seja, mesmo sendo falsa, rodará uma única vez. Define a variável em cima e depois o bloco dentro e o teste é feito no final para definir verdadeiro ou falso*/

let y = 0 ;

do{
    console.log(tab + "X" + y + "=" + (tab*y));
    y++;
}while(y <= 10);






