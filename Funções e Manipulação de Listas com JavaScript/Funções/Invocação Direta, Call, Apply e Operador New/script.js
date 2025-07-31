
const pessoa = {
    nome: 'endryus',
    idade: 23,
}

function gritar(prefixo) {
    console.log(prefixo, this.nome)
}

gritar('Olaaa')

// apply invoca uma funçao
gritar.apply(pessoa, ['Olaaa'])

gritar.call(pessoa, 'Olaaa')