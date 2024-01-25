// este bloco de código declara duas variáveis, exposta e naoExposta, mas apenas exposta é acessível fora do bloco devido ao uso de var.
if (true) {
    var exposta = "exposta"; // exposta é declarada com var, tornando-a escopo de função
    let naoExposta = "naoExposta"; // naoExposta é declarada com let, tornando-a escopo de bloco
}

// tentar logar exposta e naoExposta fora do bloco resultará em um erro para naoExposta.
console.log(exposta, naoExposta); // exposta será logada, mas naoExposta resultará em um erro

// este loop loga os valores de i de 0 a 10.
for (let i = 0; i <= 10; i++) {
    var j = i; // j é declarado com var, tornando-o escopo de função e acessível fora do loop
    console.log(i); // loga o valor atual de i
}

// o valor de j é acessível fora do loop e será logado aqui.
console.log(j);

// o código a seguir tenta reatribuir um valor a uma variável constante, o que resultará em um erro.
let const variavel = 10;
variavel = 20; // esta linha resultará em um erro, pois variavel é declarada com const

// logando o valor de variavel, mas não chegará a este ponto devido ao erro acima.
console.log(variavel);

// arrays e objetos declarados com const ainda podem ser modificados, desde que a referência permaneça a mesma.

// declarando um array constante e adicionando um novo elemento a ele.
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

// removendo o último elemento do array.
arr.pop();
console.log(arr); // [1, 2, 3]

// declarando um objeto constante e adicionando uma nova propriedade a ele.
const obj = {
    a: 1,
    b: 2
};

obj.c = 3;
console.log(obj); // { a: 1, b: 2, c: 3 }

// excluindo uma propriedade do objeto.
delete obj.c;
console.log(obj); // { a: 1, b: 2 }
