class Animal {
    constructor(nome, idade, peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    latir(){
    console.log(`${this.nome} made some noise!`)
    }
    falar(){
    console.log(`${this.nome} repetiu o som que ouviu!`)
}
    rosnar(){
        console.log(`${this.nome} emitiu um som que dá medo!`)
    }
}

const dog = new Animal("Ted", 2, 5.5)
dog.latir()

const papagaio = new Animal("Pip", 3, 0.5)
papagaio.falar()

const tartaruga = new Animal("Ana", 32, 7.6)
tartaruga.falar()

class Mamiferos extends Animal{
    constructor(nome, idade, peso){
    super(nome, idade, peso);
    }
    mamar(){
        console.log(`${this.nome} mamou hoje`)
    }
    nadar(){
        console.log(`${this.nome} nadou hoje`)
    }
}

const gatinho = new Mamiferos ("Tom", 6, 2.5)
gatinho.mamar()

const patinho = new Mamiferos("Sophia", 4, 4.4)
patinho.nadar()

const leao = new Mamiferos("Concil", 20, 50)
leao.rosnar()