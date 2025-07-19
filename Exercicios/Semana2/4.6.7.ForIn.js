//Copie o vetor de matérias no 4.4.Arrays.jsque você criou e
//percorra ele imprimindo cada matéria

//DESAFIO:Caso tenha feito o desafio de objetos, percorra ele imprimindo matéria e nota

let minhasMaterias = ["Matematica Discreta", "Arquitetura de Computadores I", "Fundamentos de Programação", "Projeto Integrado"];

for (let i in minhasMaterias){
    console.log(minhasMaterias[i]);
}



let vetores = {
    minhasMaterias : ["Matematica Discreta", "Arquitetura de Computadores I", "Fundamentos de Programação", "Projeto Integrado"],
    minhasNotas : ["7.6", "7.5", "9.4", "10.0"],
}
let vs = vetores;

for(let j in vs.minhasMaterias){
    console.log(vs.minhasMaterias[j] + " " + vs.minhasNotas[j]);
}