//Realize diversas operações aritméticas utilizando os operadores vistos na capacitação.

let a = 2;
let b = 10;
let c = 3;

let d = b*c/a;

console.log(d);

console.log((b%a == 0) ? "10 é divisivel por 2" : "10 não é divisivel por 2");

if( b > c){
    d = a + b + c;
}
else{
    d = a - b -c;
}

console.log(d);