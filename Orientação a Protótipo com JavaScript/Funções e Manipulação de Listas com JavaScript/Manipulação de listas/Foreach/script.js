

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// forEach é uma forma reduzina de percorrer a função/lista

lista.forEach((value) => {
    console.log(value)
})

lista.forEach((value, i, listRef) => {
    console.log(value + i)
})


/*
const cb = (value, i, listRef) => {
    console.log(value + i)
}

lista.forEach(cb)

for (let i = 0; i < lista.length; i++) {
    const element = array[i];
    cb(element, i, lista)
}
*/