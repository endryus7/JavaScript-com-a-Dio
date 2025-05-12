/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamada josé que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    IMC() {
        return this.peso / (Math.pow(this.altura,2));
    }

    classificarIMC () {
        const IMC = this.IMC();
        if (IMC < 18.5) {
            return ('Abaixo do peso')
        } else if (IMC >= 18.5 && IMC <= 25) {
            return ('Peso normal')
        } else if (IMC >= 25 && IMC <= 30) {
            return ('Acima do peso')
        } else if (IMC >= 30 && IMC <= 40) {
            return ('Obeso')
        } else {
            return ('Obesidade Grave')
        }
    }

    descrever() {
        console.log(`${this.nome} pesa ${this.peso}kg e tem ${this.altura} de altura`);
    }
}

const jose = new Pessoa('José', 70, 1.75);

jose.descrever();
console.log(jose.IMC());
console.log(jose.classificarIMC())

const endryus = new Pessoa('Endryus', 67, 1.80);
endryus.descrever();
console.log(endryus.IMC());
console.log(endryus.classificarIMC())

