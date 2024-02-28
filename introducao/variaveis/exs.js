// exemplo usando 'var'
var nome = "oi";
console.log(nome); // saída: "oi"
nome = 'tar';
console.log(nome); // saída: "tar"

function nome2() {
    var no1 = "das";
    console.log(no1); // saída: "das"
}

nome2();

// exemplo usando 'let'
function idadenome() {
    for(let idade = 32; idade < 50; idade++){
        console.log(`idade: ${idade}`);
    }
    // console.log(`idade: ${idade}`) dá erro porque 'idade' não está definida dentro deste escopo.
}

idadenome();

// exemplo usando 'const' com objeto
const obj = {
    nome: "oi",
    idade3: 33
}

function imprimir() {
    obj.idade3 = 23; // const permite modificar propriedades internas de objetos
    console.log(obj.nome, obj.idade3);
}

imprimir(); // saída: "oi 23"
