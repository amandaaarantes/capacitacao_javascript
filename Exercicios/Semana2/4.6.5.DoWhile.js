//Como o Do While não é frequentemente usado seja criativo e crie um exemplo de uso para ele

//lendo números e retornando o seu quadrado até que o número 0 seja digitado
// economiza umas linhas de codigo, pq não precisa de um console log antes da estrutura de repetição para ler o primeiro número

do{
   
   let num = Number(prompt("Digite um número: "));

    num *= num;
    console.log("O quadrado é: " + num);

} while(num != 0);