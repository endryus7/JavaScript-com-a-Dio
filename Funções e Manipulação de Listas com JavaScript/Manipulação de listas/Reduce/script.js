
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// reduce - percorre toda a lista e transforma essa lista em um unico valor, reduz essa lista em um unico valor
const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current
}, 0)  // , 0 - valor inicial

console.log(`segundo console ${somaDeTodosOsNumeros}`)



