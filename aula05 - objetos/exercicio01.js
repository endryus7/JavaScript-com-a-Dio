/*
    Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilometro rodado.
    Crie um método que dado a quantidade de quilómetros e o preço do combustivel nos de o valor gasto em reais para realizr este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoViagem(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}


const carro1 = new Carro('Chevrolet', 'Amarelo', 1/15);
const carro2 = new Carro('Fiat', 'Preto', 1/10)

console.log(carro1.calcularGastoViagem(70, 5));
console.log(carro2.calcularGastoViagem(70, 5));



