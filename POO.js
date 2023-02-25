class Empregado {
    constructor(nome, sobrenome, profissao, salario){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.profissao = profissao;
        this.salario = salario;
    }
    batePonto(){
        console.log(`${this.nome} bateu o ponto!`)
    }
    DDS(){
        console.log(`${this.nome} participou do DDS! `)
    }
}

class engenheiro extends Empregado{
    constructor(nome){
        super(nome);
    }
}

const dev = new Empregado("Diego", "Souza", "Dev", 3.500)
console.log(dev.salario)

const engenheiroS = new engenheiro("Tasso")


dev.DDS()
engenheiroS.DDS()