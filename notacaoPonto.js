console.log(Math.ceil(6.1)) // Math.ceil arredonda o número para cima
console.log(Math.floor(6.1)) // Math.ceil arredonda o número para baixo

const obj1 = {}
obj1.nome = 'Caneta'
console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome
}

const Obj2 = new Obj('Cadeira') // Instancia do Obj
const Obj3 = new Obj('Mesa') // Instancia do Obj