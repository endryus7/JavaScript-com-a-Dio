

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`)
}

const endryus = {
    genero: 'masculino'
}

Pessoa.call(endryus, 'endryus', 30)

console.log(endryus)




// Brincando
/*
String.prototype.toPLang = function() {
    return `P ${this}`
}

console.log('teste'.toPLang())
*/