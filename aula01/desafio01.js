/* Faça um programa para calcular o valor de uma viagem
Você terá 3 variáveis. Sendo elas:
1 - Preço do combustivel
2 - Gasto médio de combustivel do carro por KM
3 - Distancia em KM da viagem
*/

const combustivel = 6.56;
const kmPorLitros = 12;
const distanciaEmKm = 78;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorViagem = litrosConsumidos * combustivel;

console.log(`O valor da viagem é ${valorViagem.toFixed(2)} reais`);