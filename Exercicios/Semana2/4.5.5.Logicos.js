//a) Escreva um programa que verifica se um número digitado pelo usuário é positivo e par.
//Se o número atender a essas duas condições, exiba a mensagem 'O número é positivo e par', caso contrário, exiba a mensagem 'O número não é positivo e par'.


//b) Agora, teste se ele é positivo ou par, mas não ambos. Se o número atender a uma das condições, exiba a mensagem 'O número é positivo ou par', caso contrário, exiba a mensagem 'O número não é positivo ou par'.


//c) Por fim, teste se as variáveis do da letra a e b são iguais. Se forem, exiba a mensagem 'Os números são iguais', caso contrário, exiba a mensagem 'Os números são diferentes'.


let num = Number(prompt("Digite um número: "));
let a, b, c;
if(num % 2 == 0 && num > 0){
    a = true;
}
else{
    a = false;
}

console.log((a) ? "O número é positivo e par" : "O número não é positivo e par" );

if(num % 2 == 0 || num > 0){
    b = true;
}
else{
    b = false;
}

console.log((b) ? "O número é positivo ou par" : "O número não é positivo ou par");

if(a == b){
    c = true;
}
else{
    c = false;
}

console.log((c) ? "Os números são iguais" : "Os números são diferentes");