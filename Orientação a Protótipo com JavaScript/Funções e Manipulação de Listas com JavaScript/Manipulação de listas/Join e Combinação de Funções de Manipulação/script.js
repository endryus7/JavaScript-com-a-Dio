
/*
const lista = [1, 2, 3]

// join - é um juntar

console.log(lista.join(':'))
*/

/*
const lista = [{ nome: 'Endryus'}, { nome: 'José'}, { nome: 'Renan'}]

console.log(lista.map((e) => e.nome).join('; '))
*/

/*
const lista = [{ nome: 'Endryus'}, { nome: 'José'}, { nome: 'Renan'}, { nome: 'Amanda'}]

console.log(
    lista.map(e => e.nome)
        .filter((e) => e.startsWith('A'))
        .join('; ')
)
*/


const lista = [{ nome: 'Endryus'}, { nome: 'José'}, { nome: 'Renan'}, { nome: 'Amanda'}]

const elementosEmHtml = lista
    .filter((e) => e.nome.startsWith('A'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)

