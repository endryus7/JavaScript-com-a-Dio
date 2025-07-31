// First Class Functions
// Higher Order Functions

/*
function falarMeuNome() {
    console.log('Meu nome é Endryus')
}

function falarMeuNomeCompleto(falarMeuNome) {
    falarMeuNome()
    console.log('Montezano dos Reis')
    return falarMeuNome
}

falarMeuNomeCompleto(falarMeuNome)
*/

function NomeDaFuncao() {
    console.log('NomeDaFuncao')
}

const nomeDeOutraFuncao = function() { // atribuindo uma function a uma variavel
    console.log('NomeDeOutraFuncao')
}

NomeDaFuncao()
nomeDeOutraFuncao()