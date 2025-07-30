
// 'var' vaza escopo por conta do hoisting

//var var1; escopo
if (true) {
    var1 = 10;
}

console.log(var1)

//nao vazou o escopo na function
/*
function teste() {
    var var2 = 10;
}

teste();

console.log(var2);
*/
////////////////////////////////////////////////////////////

//let se restringe a qualquer tipo de escopo, qualquer bloco ja para ele 

/* 
if (true) {
    let var3 = 10;
}

console.log(var3);~
*/

////////////////////////////////////////////////////////////

// const se restringe ao escopo de bloco e nao recebe atribuições

//const nao recebe atribuições
const x = 10;
x = 11;

console.log(x)
