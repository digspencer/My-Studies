// Armazenando função em uma variável
const imprimirSoma = function (a, b) {console.log(a + b)}

imprimirSoma (2, 3);

// Armazenando uma função Arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}

console.log(soma(2, 5));

// Retorno implícito, forma abreviada
const substracao = (a, b) => a - b; 
console.log(substracao(10,5));