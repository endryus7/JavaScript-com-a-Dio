
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// retorna uma lista nova com oq foi filtrado
const listaDeNumerosPares = lista.filter((element, i, listRef) => {
    return (element % 2 ===0)
})

console.log(lista)
console.log(listaDeNumerosPares)

