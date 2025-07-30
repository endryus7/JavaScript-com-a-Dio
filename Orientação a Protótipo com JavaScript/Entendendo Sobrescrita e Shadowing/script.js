// Sobrescrita

const pessoa = {
    idade: 18,
}

const endryus = {
    nome: 'endryus',
    idade: 23,
    __proto__: pessoa 
}

// se achar primeiro a idade no objeto endryus ele nao procura mais, se nao achar ele vai no proto procurar, se achar retorna o valor

console.log(endryus.idade)