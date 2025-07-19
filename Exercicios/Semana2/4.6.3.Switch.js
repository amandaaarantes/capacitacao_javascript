//Faça uma estrutura de switch para dado o código da sua matéria desse semestre
//ela irá imprimir no console o nome completo da materia

let codigo = "XDES01";

switch(codigo){
    case "XMAC01":
        console.log("Matematica Discreta");
        break;
    case "XDES01":
        console.log("Fundamentos de Programação");
        break;
    case "CRSC03":
        console.log("Arquitetura de Computadores I");
        break;
    case "CAHC04":
        console.log("Projeto Integrado");
        break;
    default:
        console.log("Matéria não encontrada");

}