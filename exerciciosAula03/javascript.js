let n1 = prompt("Digite um valor: ");
let triplo = (n1)**3;

alert('O tripo desse valor é: ' + triplo);



let a = prompt("Digite o 1ª número: ");
let b = prompt("Digite o 2ª segundo número: ");

let c = (+a)+(+b)

alert('A soma entre os dois números é: ' + c);


let quad = prompt("Digite um valor para calcular o quadrado: ");
let quadresul = (quad)**2;

alert('O quadrado desse número é: ' + quadresul);



let nota1, nota2, nota3;

nota1 = prompt("Digite a primeira nota: ");
nota2 = prompt("Digite a segunda nota: ");
nota3 = prompt("Digite a terceira nota: ");
let media = (+nota1) + (+nota2) + (+nota3) / 3;

alert('A média das notas é: ' + media);



let numb1, numb2, numb3;

numb1 = prompt("Digite um valor inteiro: ");
numb2 = prompt("Digite um segundo valor inteiro: ");
numb3 = prompt("Digite um terceiro valor inteiro: ");
let somaint = (+numb1) + (+numb2) + (+numb3);

alert('A soma desses valores é: ' +somaint);



let area, base, altura;

base = prompt("Digite o valor da base de um triângulo: ");
altura = prompt("Digite o valor da altura de um triângulo: ");
area = (base*altura) / 2;

alert('A área desse triângulo: ' + area + ' cm.');


let name, anoNascimento, anoAtual;

name = prompt("Digite seu nome: ");
anoNascimento = prompt("Digite o ano do seu Nascimento: ");
anoAtual = prompt("Digite o ano atual: ");
idade = (+anoAtual) - (+anoNascimento);

alert("Nome: " + name + "\nIdade: " + idade + " anos.");


let alturadegr,alturadesej;

alturadegr = prompt("Digite a altura em metros de um degrau: ");
alturadesej = prompt("Digite a altura em metros desejada por um pedreiro alcançar: ");
quantdegr = alturadesej / alturadegr;

alert( "A quantidade precisa de degraus para conseguir atingir a altura desejada é de: " + quantdegr + " degraus.");

