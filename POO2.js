class Funcionario{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

class dev extends Funcionario{
    constructor(nome, idade, profissao){
        super(nome, idade, profissao)
    }
    daily(){
        console.log(`${this.nome} participou do Daily!`)
    }
    pointRegister(){
        console.log(`${this.nome} registrou o ponto!`)
    }
}

const diego = new dev("Diego", 33, "desenvolvedor")
diego.pointRegister()