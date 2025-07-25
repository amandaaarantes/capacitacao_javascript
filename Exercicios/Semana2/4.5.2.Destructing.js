/*
Exercício de Destructuring em JavaScript
1. Dado o seguinte array:
const numbers = [1, 2, 3, 4, 5];
a) Utilize a sintaxe de Destructuring para atribuir os valores 1, 2 e 3 às variáveis a, b e c, respectivamente.
b) Utilize a sintaxe de Destructuring para atribuir os valores 4 e 5 a uma variavel d.
2. Dado o seguinte objeto:
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
a) Utilize a sintaxe de Destructuring para atribuir os valores 'John', 30 e 'New York' às variáveis name, age e city, respectivamente.

b) Utilize a sintaxe de Destructuring para atribuir o valor 'John' e o valor 30 à variável PersonResume.

*/

// 1.
let a, b, c, rest;
const numbers = [1,2,3,4,5];
[a,b,c] = numbers;

console.log(a);
console.log(b);
console.log(c);

// 2.
let person = {
    name: null,
    age: null,
    city: null,
};


person = ["John", "30", "New York"];

console.log(person.name);
console.log(person.age);
console.log(person.city);
