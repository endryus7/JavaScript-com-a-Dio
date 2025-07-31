
// Armazena o x, guarda o contexto que foi criado (se lembra do contexto q foi criada)
function soma(x) {
    return function (y) {
        return x + y;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))
