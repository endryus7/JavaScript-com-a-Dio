
/*
const pessoa = {
    genero: 'masculino',
}

const endryus = {
    nome: 'endyus',
    idade: 23,
    __proto__: pessoa // herdando as propriedades de pessoa
}

console.log(endryus.genero)
*/


function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}`)   
}

const endryus = new Pessoa('endryus', 23)

endryus.falar()


/*
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`) 
    }
}

*/