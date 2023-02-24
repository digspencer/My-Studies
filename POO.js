class Animais {
    constructor(nome){
        this.nome = nome;
    }
    speak(){
        console.log(`${this.nome} made some noise :)`)
    }
    bark(){
        console.log(`${this.nome} emitiu o som de au au !`)
    }
}

class dog1 extends Animais {
    constructor(nome){
        super(nome);
    }
}

const gatoTom = new Animais("Gato Tom")
gatoTom.speak()

const dog = new Animais("Doguinho")
dog.bark()

const dog2 = new dog1("Bob")
dog2.speak()