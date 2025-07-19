//Faça um condicional para verificar se a nota de calculo deu para passar

// DESAFIO: dado um valor em R$, verificar se você precisa de moedas ou não
// Dica: tenta ver as casas decimais

let minhaNotaEmCalculo = 5.9;
let professorGenteBoa = false;
let resultado;

if(minhaNotaEmCalculo >= 6){
    resultado = true;
}
else{

    if(minhaNotaEmCalculo > 5 && professorGenteBoa){
        resultado = true;
    }
    resultado = false;
}

console.log("Deu pra passar em calculo?");
console.log((resultado) ? "Sim" : "Não");




let valor = 31.60;
let centavos;
let precisaDeMoeda = false;

if(valor % 2 != 0){

    precisaDeMoeda = true;
}

if(parseInt(valor) != valor && valor - parseInt(valor) >= 5){

    precisaDeMoeda = true;
}

console.log(precisaDeMoeda ? "Precisa de moeda" : "Não Precisa de moeda");