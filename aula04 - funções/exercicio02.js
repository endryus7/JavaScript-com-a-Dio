function escrevaMeuNome(nome){
    return (`Meu nome é ${nome}`);
}


function verificarIdade(idade){
    if (idade >= 18) {
        console.log(`${escrevaMeuNome('Endryus,')} você é maior de idade`);
    } else {
        console.log('Você é menor de idade');
    }
}

verificarIdade(23);
