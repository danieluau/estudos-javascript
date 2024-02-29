// definindo duas strings
let str1 = "entao";
let str2 = "tar";

// usando template literals para concatenar as strings
console.log(`oi, ${str1} ${str2}`);

// definindo mais duas strings
let str3 = "js"
let str4 = "legal";

// usando template literals com múltiplas linhas
console.log(`estou escrevendo códigos em ${str3}. ${str4} né?`);

// usando template literals com múltiplas linhas e uma lista
console.log(`-estou praticando ${str3}. 
-${str4} né?`);

// definindo uma função de soma
const soma = (a, b) => {
    return a + b
} 

// definindo dois números
let a = 4;
let b = 12;

// usando template literals para exibir a soma
console.log(`a soma de ${a} e ${b} = ${soma(a, b)}`);
