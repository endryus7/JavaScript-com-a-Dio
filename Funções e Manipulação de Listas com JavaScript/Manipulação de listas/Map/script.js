
class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista = [new Pessoa('Endryus'), new Pessoa('Renan'), new Pessoa('Andresa'), new Pessoa('vitor'), new Pessoa('José')]

/* forma padrão
const listaNomes = []

for (let i = 0; i < lista.length; i++) {
    const element = lista[i];
    listaNomes.push(element.nome)
}
*/

// map é uma conversao de um objeto em outro
const listaNomes = lista.map((element, i) => {
    return `${i} - ${element.name}`
})

console.log(listaNomes)