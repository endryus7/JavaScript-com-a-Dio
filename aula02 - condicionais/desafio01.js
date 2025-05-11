/* Faça um programa para calcular o valor de uma viagem.
Você terá 5 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distancia em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const etanol = 4.35;
const gasolina = 6.56;
const tipoCombustivel = 'gasolina';
const kmPorLitros = 10;
const distanciaKm = 100;

const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'gasolina') {
    const valorViagemGasolina = litrosConsumidos * gasolina;
    console.log(`O valor da viagem é ${valorViagemGasolina.toFixed(2)} reais`);
} else {
    const valorViagemEtanol = litrosConsumidos * etanol;
    console.log(`O valor da viagem é ${valorViagemEtanol.toFixed(2)} reais`);
}
    