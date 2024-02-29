// tipos de dados 

// declarando uma variável str com o valor 3 (número)
let str = 3;

// declarando uma variável str3 com uma expressão booleana (3 igual a 3)
let str3 = 3 === 3;

// imprimindo o tipo da variável str usando o operador typeof
console.log(typeof str);

// verificando se str3 é uma instância de Number (neste caso, retorna false,
// pois str3 é um booleano, não um objeto Number)
console.log(str3 instanceof Number);


let x = 'something';
x = 1;

x = 1 + ' hello';

// imprimindo o tipo da variável x
console.log(typeof x);

// verificando se x é uma instância de algum tipo (neste caso, não é específico)
console.log(x instanceof Object);

// declarando uma variável y com o valor 0
let y = 0;

// declarando uma variável z com uma expressão booleana (0 igual a uma string vazia)
let z = 0 === '';

// imprimindo o valor da variável y
console.log(`y é ${y}`);

// imprimindo o valor da variável z
console.log(`z é ${z}`);