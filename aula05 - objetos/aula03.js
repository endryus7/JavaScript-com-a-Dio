
class pessoa {
    nome;
    idade;
    altura;
    anoDeNascimento;

    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoDeNascimento = 2025 - idade;
    }
    
    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
}

const endryus = new pessoa('Endryus', 23, 1.80);
const joao = new pessoa('João Vitor', 21, 1.70);

endryus.descrever();
joao.descrever();

console.log(endryus)
