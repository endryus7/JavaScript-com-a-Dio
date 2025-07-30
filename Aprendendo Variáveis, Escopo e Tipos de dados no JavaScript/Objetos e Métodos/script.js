/*
    boolean
    null
    undefuned
    number
    string
    symbol
*/

// object

/*
const x = {
    nome: 'endryus',
    idade: 23,
    "teste teste": 10
}

x.sobrenome = 'Montezano dos Reis'
console.log(x)

console.log(x.nome)
console.log(x['nome'])

x['nome'] = 'Jose'

console.log(x.nome)
console.log(x['nome'])
*/

const x = {
    nome: 'endryus',
    idade: 23,
}

x.falar = function() {
    console.log('teste')
}

x.falar()


const y = {
    nome: 'endryus',
    idade: 23,
    ouvir: function() {
        console.log('teste2')
    }
}

y.ouvir()


// quando uma funçao esta dentro de um objeto  o 'this' se refere ao objeto
const pessoa = {
    nome: 'endryus',
    idade: 23,
    ouvir: function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const o = pessoa.ouvir

pessoa.ouvir()
o()