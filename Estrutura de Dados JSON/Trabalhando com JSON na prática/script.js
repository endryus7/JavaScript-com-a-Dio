//JSON - JavaScript Object Notation
// chave e valor com objetivo de transferir dados

let invoice = {
    name: "Endryus",
    age: 23,
    products: {
        0: ["mouse gpro", 29.90],
        1: ["teclado mecanico", 129.99],
        2: ["monitor", 899.99],
        3: ["TV 100 polegadas", "10000.90"],
    },
    taxes: "98.90"
}

/*
console.log(invoice)
console.log(invoice.name)
console.log(invoice.products)
*/

generateInvoice(invoice)

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`)
    console.log(`A idade é ${invoice.age}`)
    console.log("---------------")

// 'in' percorre a lista quantos itens tiver
    for(let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}



// Estrutura sem JSON
/*
let name = "Endryus"
let age = 23
let products = ["mouse gpro", "teclado mecanico", "monitor"]
let productsValues = [29.90, 129.99, 899.99]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age) {
    console.log(`O comprador é ${name}`)
    console.log(`A idade é ${age}`)
    console.log("---------------")
    console.log(`O produto é ${products[0]}`)
    console.log(`O valor é ${productsValues[0]}`)
}
*/