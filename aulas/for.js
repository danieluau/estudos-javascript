// array contendo alguns estados brasileiros
const listaDeEstados = ["rj", "mg", "sp"];

// declaração de uma variável chamada estado
let estado;

// iterando sobre os elementos da lista usando 'for...of'
for (estado of listaDeEstados) {
    console.log(estado + " é um estado brasileiro");
}

// iterando sobre os elementos da lista usando 'for...of' e declarando a variável no loop
for (let estado of listaDeEstados) {
    console.log(estado + " é um estado brasileiro");
}

// iterando sobre os elementos da lista e exibindo-os em maiúsculas
for (let estado of listaDeEstados) {
    console.log(estado.toUpperCase());
}
