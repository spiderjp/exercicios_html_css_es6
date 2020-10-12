 "use strict";

 function anima(){
     let posX = Math.round(Math.random()*800);
     let posY = Math.round(Math.random()*500);

     document.querySelector("#personagem").style.top = posY + "px"; // .style é para alterar css.
     document.querySelector("#personagem").style.left = posX + "px";
 }
 
 setInterval(anima, 1000); // Repetição infinita que executa função anima a cada 1s.

/*

 setTimeout(function(){

    clearInterval(tempo);



 }, 5000); */

 document.querySelector("#personagem").addEventListener("click", function(){

    clearInterval(tempo)

 });