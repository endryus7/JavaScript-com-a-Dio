/* Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprime a sua média e a sua classificação conforme a tabela abaixo

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação
- Média entre 5 e 7, recuperação
- Média acima de 7, passou de semestre
*/

const nota1 = 6;
const nota2 = 9;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Você foi reprovado');
} else if (media <= 7) {
    console.log('Você está em recuperação');
} else {
    console.log('Você passou de semestre');
}