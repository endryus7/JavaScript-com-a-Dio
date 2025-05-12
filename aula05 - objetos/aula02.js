
class pessoa { // class é a definição do que deve ser o objeto
    nome;
    idade;
    altura;

    // Na class nao preciso usar a palavra function
    descrever() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
}

const endryus = new pessoa();
endryus.nome = 'Endryus';
endryus.idade = 23;
endryus.altura = 1.80;

const joao = new pessoa();
joao.nome = 'João Vitor';
joao.idade = 21;
joao.altura = 1.70;

endryus.descrever();
joao.descrever();


/*
const pessoa = { // Instancia é uma ocorrencia do objeto
    nome: 'Endryus Montezano',
    idade: 23,
    altura: 1.80,

    descrever: function() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
}
*/