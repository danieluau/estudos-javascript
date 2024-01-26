// iife (função invocada imediatamente) vazia
(function () {
    // este bloco de código não faz nada, pois está vazio
    // não há variáveis definidas dentro, então não há nada para ser retornado ou usado fora da iife
})()

    // outra iife que define uma variável 'meuNome'
    (function () {
        // define a variável 'meuNome' dentro do escopo da iife
        const meuNome = "Raoni";
    })()

// tenta acessar 'meuNome' fora do escopo da segunda iife
console.log(meuNome);
// isso resultará em um erro, pois 'meuNome' está definido apenas no escopo da segunda iife

// se você deseja armazenar o resultado da segunda iife, você pode fazer assim:
const resultado = (function () {
    // define a variável 'meuNome' dentro do escopo da iife
    const meuNome = "Raoni";
    // retorna 'meuNome' para que possa ser atribuído à variável 'resultado'
    return meuNome;
})();

// exibe o resultado da segunda iife (o valor de 'meuNome')
console.log(resultado);
