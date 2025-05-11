/*  Elabore um algoritmo que calcule o que dever ser pago por um produto, considerando o preço normal da etiqueta e a escolha da condição de pagmento.
Utilize os códigos de tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - À vist Débito, recebe 10% de desconto
2 - À vist no Dinheiro ou PIX, recebe 15% de desconto
3 - Em duas vezes, preço normal de etiqueta sem juros
4 - Acima de duas vezes, preço normal de etiqueta maiis juros de 10%
*/

const precoEtiqueta = 100
const formaDePagamento = 1

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1))
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta)
} else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}



