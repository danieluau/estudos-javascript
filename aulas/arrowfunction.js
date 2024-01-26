// declaração de uma função anônima usando a palavra-chave const
const minhaF = function () {
    console.log("1 alguma coisa");
}

// chamada da função
minhaF();

// declaração de uma função nomeada usando a palavra-chave function
function minhaFe() {
    console.log("2 alguma coisa");
}

// chamada da função
minhaFe();


const divisao = (a, b) => {
    return a / b;
};


let resultadoDivisao = divisao(10, 2);
console.log(resultadoDivisao); 

// declaração de uma expressão de função usando a arrow function
const funcao = () => "4 uma expressao de funcao";

// chamada da função (a expressão de função retorna um valor)
funcao();
// o console.log é necessário para exibir o valor retornado pela função

// observe que o código a seguir pode não funcionar como esperado devido a um erro de sintaxe.

// tentativa de reatribuir um valor a uma constante

const obj = {
    // método dentro do objeto
    thisLocal: function() {
        // IIFE (Função Invocada Imediatamente) usando uma função de seta (arrow function)
        const thisLocal = (() => {
            // loga o valor de 'this' dentro da função de seta (que herda 'this' do método thisLocal)
            console.log("this", this);
        })(); // IIFE é invocada imediatamente devido aos parênteses no final

        // loga o resultado da IIFE (que é undefined, pois a IIFE não retorna nada)
        console.log("7", thisLocal);
    }
};

// chama o método thisLocal do objeto 'obj'
obj.thisLocal();



