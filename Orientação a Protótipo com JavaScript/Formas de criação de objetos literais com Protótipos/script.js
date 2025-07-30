
const pessoa = {
    genero: 'masculino'
}

/*
const endryus = {
    nome: 'endryus',
    //__proto__: pessoa
}
*/

const endryus = Object.create(pessoa) // cria um proto

endryus.nome = 'endryus'

console.log(endryus.genero)