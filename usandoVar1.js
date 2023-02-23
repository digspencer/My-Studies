{{{ var sera = "será"}}}
console.log(sera) // Nesse caso por se tratar de um bloco a variável está disponível fora dele

function teste (){
    var local = 123
}

teste()
console.log(local) // Nesse caso não é possível acessar a variável local porque ela está disponível apenas dentro da função