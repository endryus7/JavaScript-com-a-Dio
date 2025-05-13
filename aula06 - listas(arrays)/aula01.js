const alunos = ['joao', 'endryus', 'maria'];

console.log(alunos[0]);

alunos.push('yuri'); // Para adicionar um elemento na última posição (posição 3)
console.log(alunos);

alunos[3] = 'marco'; // Para adicionar um elemento na posição escolhida 

console.log(alunos);

alunos.pop(); // Remove o ultimo elemento da lista

console.log(alunos);

alunos.shift() // Remove o primeiro elemento da lista

console.log(alunos);