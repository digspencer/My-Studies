// par Nome/Valor
const saudacao = 'opa' // Contexto Léxico 1

function exec(){
    const saudacao = 'faaala' // Contexto Léxico 2
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 72,
    endereco: {
        logradouro: "Rua da Agulha",
        numero: 123
    }
}

console.log(cliente.idade)