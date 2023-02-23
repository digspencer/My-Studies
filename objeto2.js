console.log(typeof Object) // Nesse caso é uma função
console.log(typeof new Object) // Nesse caso é uma instancia que é um objeto

const cliente = function(){}
console.log(typeof cliente)
console.log(typeof new cliente)

class produto {} //  ES 2015 (ES6)
console.log(typeof produto)
console.log(typeof new produto) // A partir do objeto ele retorna uma instancia da função como já vimos no exemplo anterior