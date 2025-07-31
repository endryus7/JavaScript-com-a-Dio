
/*
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    const numero = parseInt(Math.random() * 100)
    resolve(numero)
})

promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })
*/

/*
try {

} catch (error) {

} finally {

}
*/


/*
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => { // depois de 1s, ele me retorna
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000) //1000 = 1s
})


promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })
*/

const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000) 
})


promessaDeUmNumeroQualquer
    .then((value) => {
        console.log(value)
        return value + 10
    })
    .then((value) => { // da para botar mais de 1 'then'
        console.log(value)
    })
    .catch((error) => {
        console.error(error)
    })
    .finally(() => {
        console.log('finalizou!')
    })