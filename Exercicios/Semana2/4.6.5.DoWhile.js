//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

//lendo números e retornando o seu quadrado até que o número 0 seja digitado

let num;

do{
    console.log("Digite um número: ");
    console.readline(num);

    console.log(num + "" + num + "" + num);
    comsole.log(num + "   " + num);
    console.log(num + "" + num + "" + num);

    num *= num;
    console.log("O quadrado é: " + num);

} while(num != 0);