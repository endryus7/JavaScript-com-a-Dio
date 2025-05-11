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

const altura = 1.80;
const peso = 65;
// forma mais simples = const IMC = peso / (altura * altura);
const IMC = peso / Math.pow(altura,2); 
//Math.pow (biblioteca utilitários de funções matemáticas)

if (IMC < 18.5) {
    console.log('Você está Abaixo do peso');
} else if (IMC >= 18.5 && IMC <= 25) {
    console.log('Você está com Peso normal');
} else if (IMC >= 25 && IMC <= 30) {
    console.log('Você está Acima do peso');
} else if (IMC >= 30 && IMC <= 40) {
    console.log('Você está Obeso');
} else {
    console.log('Você está com Obesidade Grave');
}