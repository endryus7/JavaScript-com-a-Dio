/* O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
- Abaixo de 18.5 Abaixo do peso
- Entre 18.5 e 25 Peso normal
- Entre 25 e 30 Acima do peso
- Entre 30 e 40 Obeso
- Acima de 40 Obesidade Grave
*/

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return ('Você está Abaixo do peso');
    } else if (IMC >= 18.5 && IMC <= 25) {
        return ('Você está com Peso normal');
    } else if (IMC >= 25 && IMC <= 30) {
        return ('Você está Acima do peso');
    } else if (IMC >= 30 && IMC <= 40) {
        return ('Você está Obeso');
    } else {
        return ('Você está com Obesidade Grave');
    }
}

(function() {
    const altura = 1.80;
    const peso = 65;
    const IMC = calcularIMC(peso, altura);
    console.log(classificarIMC(IMC));
})(); 
/* função invocada imediatamente (funtion main(){
                                 })()
usando () na function e depois chamando ela no final das {} - ()
Se quiser posso tirar o nome da função.
Isso ajuda a criar uma função que vou usar uma unica vez.
Assim não preciso chamar a função em uma linha - main();
*/

