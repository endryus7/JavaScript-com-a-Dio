
const pessoa = {
    nome: 'Endryus Montezano',
    idade: 23,
    altura: 1.80,

    // this é usada para se referir ao objeto atual em que o codigo esta  sendo executado, pode ser usada para acessar as propriedades e metodos desse objeto, em vez de usar pessoa.nome usa -> this.nome
    descrever: function() {
        console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade} e minha altura é ${this.altura}`);
    }
}

// Editando a function
pessoa.descrever = function() {
    console.log(`Meu nome é ${this.nome}`);
}

pessoa.descrever();

const atributo = 'idade';

// Os 2 tem a mesma função de atribuir
pessoa['nome'] = 'teste'; // Desse jeito é dinamico
pessoa.nome = 'teste'; // Desse jeito é um acesso direto 