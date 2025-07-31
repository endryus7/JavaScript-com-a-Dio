

function funcao1() {
    console.log(this)
}

// Arrow function '=>'
const funcao2 = () => {
    console.log(this)
}

const endryus = {
    nome: 'endryus',
    funcao1,
    funcao2
}

endryus.funcao1()
endryus.funcao2()