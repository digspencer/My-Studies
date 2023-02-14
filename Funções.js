// Função Sem retorno
function imprimirSoma (a, b){
    console.log(a + b);
}

imprimirSoma(5, 6);
imprimirSoma(5); // Não vai funcionar porque a função pede 2 paramêtros
imprimirSoma(5, 6, 5, 7); // também vai funcionar, porém vai imprimir os primeiros paramêtros e ignorar o restante

// Função com retorno
function soma (a, b = 0) {
    return a + b;
}

console.log(soma(10)); //Funciona pq o primeiro parametro é 10 e o segundo é 0 por padrão, no caso 10 + 0 = 10
