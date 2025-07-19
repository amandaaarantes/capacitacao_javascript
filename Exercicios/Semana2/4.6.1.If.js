//Crie um condição para verificar se o Ex é o melhor projeto da unifei
//Use a váriavel abaixo:

const ExMelhorProjeto = true;

let projeto = String(prompt(console.log("Digite o nome de um projeto da UNIFEI:")));

if(projeto == "Ex Machina" && ExMelhorProjeto){
    console.log(projeto + " é o melhor projeto da UNIFEI");
}
else{
    console.log("Errou. Ex Machina é o melhor projeto da UNIFEI");
}


/* console.log((ExMelhorProjeto) ? "Ex Machina é o melhor projeto da UNIFEI") : "Erro. Ex Machina é SIM o melhor projeto da UNIFEI");}*/