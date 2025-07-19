//Percorra o vetor de notas que voce criou em 4.4.Arrays.js e calcule a média delas
//Após sair do for imprima sua média

//DESAFIO: copie também o vetor de matérias, utilize o for para percorrer os dois vetores
//e imprimir a matéria e a nota correspondente

let minhasMaterias = ["Matematica Discreta", "Arquitetura de Computadores I", "Fundamentos de Programação", "Projeto Integrado"];

let minhasNotas = ["7.6", "7.5", "9.4", "10.0"];
let media = 0;

for(let i = 0; i < minhasNotas.length; i++){
    media += Number(minhasNotas[i]);
}

console.log("Média: " + media/(minhasNotas.length));

for(let j = 0; j < minhasNotas.length; j++){
    console.log(minhasMaterias[j] + "- Nota " + minhasNotas[j]);
}