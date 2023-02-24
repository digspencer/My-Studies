// Recurso do ES 2015
// Retira as coisas (Destrói)


const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        lagradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade) // Ele retirou de dentro do objeto "pessoa" os atributos

const { endereco: { lagradouro, numero }} = pessoa
console.log(lagradouro)

const { conta: {ag, num}} = pessoa // nesse caso vai dar problema pq esse atributo não existe dentro da classe