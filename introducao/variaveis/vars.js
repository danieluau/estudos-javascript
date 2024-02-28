var um = 1;
// declara uma variável global
// 'um' e a inicializa com o valor 1.

function oi() {
    let dois = 2;
    // declara uma variável 'dois' com escopo de bloco dentro da função 'oi'.
    // pode ser reatribuída, mas não pode ser redeclarada no mesmo escopo.
}

const tres = 3;
// declara uma constante 'tres' com escopo de bloco e a inicializa com o valor 3.
// não pode ser reatribuída nem redeclarada no mesmo escopo.

var dois = 3;
// reatribui o valor da variável 'dois' (declaração anterior) para 3.
// a variável 'dois' foi declarada anteriormente usando 'let'.

console.log(dois);
// saída: 3 - imprime o valor de 'dois' após a reatribuição.

console.log(x);
// saída: undefined - devido ao hoisting, 'x' é elevado, mas não inicializado ainda.
var x = 5;
// inicializa 'x' com o valor 5.

const d = 10;
// não pode ser reatribuída. tentar reatribuir geraria um erro.

const lista = [1, 3, 4, 5];
lista.push(3);
// modifica o array 'lista' adicionando o valor 3 ao final.
console.log(lista);

const obj = {
    name: "daniel",
    ok: 30
};
obj.ok = 32;
// modifica a propriedade 'ok' do objeto 'obj' para o valor 32.
console.log(obj);
