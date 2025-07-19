//Crie um objeto pessoa com as propriedades nome, idade e altura. Crie duas variáveis Pessoa1 e Pessoa2, e atribua valores diferentes para cada uma das propriedades.
//Compare as variáveis Pessoa1 e Pessoa2 com os operadores relacionais e mostre no console o resultado de cada comparação.

let pessoa = { nome: null,idade: null ,altura: null,}

let p1 = pessoa;
p1.nome = "Maria";
p1.idade = "32";
p1.altura = "1.66";

let p2 = pessoa;
p2.nome = "Juliano";
p2.idade  = "32";
p2.altura = "1.70";

if(p1.nome == p2.nome){
    console.log("Ambos possuem o mesmo nome: " + p1.nome);
}
else{
    console.log("Nomes distintos: " + p1.nome + " != " + p2.nome);
}

if(p1.idade == p2.idade){
    console.log("Mesma idade: " + p1.idade +" anos");
}
else if(p1.idade < p2.idade){
    console.log(p2.nome + " é mais velho(a) que " + p1.nome);
}
else{
    console.log(p1.nome + " é mais velho(a) que " + p2.nome);
}

if(p1.altura == p2.altura){
    console.log("Mesma altura: " + p1.altura +"m");
}
else if(p1.altura < p2.altura){
    console.log(p2.nome + " é mais alto(a) que " + p1.nome);
}
else{
    console.log(p1.nome + " é mais alto(a) que " + p2.nome);
}