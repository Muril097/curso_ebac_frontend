const alunos = [
    {nome:'João', nota1: 5,nota2: 6,nota3: 4,nota4: 8},
    {nome:'Maria', nota1: 7,nota2: 8,nota3: 8,nota4: 6},
    {nome:'Matheus', nota1: 4,nota2: 3,nota3: 5,nota4: 5},
    {nome:'Luana', nota1: 9,nota2: 9,nota3: 8,nota4: 10},
    {nome:'Guilherme', nota1: 2,nota2: 3,nota3: 3,nota4: 5},
    {nome:'Giovana', nota1: 8,nota2: 5,nota3: 6,nota4: 4}
]

const Aproved = (list) => list.filter( aluno => (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4 >= 6);

const Reproved = (list) => list.filter( aluno => (aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4 < 6);

const Aprovados = Aproved(alunos);
const Reprovados = Reproved(alunos);

console.log("--- Média dos Alunos ---");
alunos.forEach(aluno => {
    console.log(`${aluno.nome}: ${(aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4} `);
});

console.log("--- Alunos Aprovados ---");
Aprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${(aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4}`);
});

console.log("--- Alunos Reprovados ---");
Reprovados.forEach(aluno => {
    console.log(`${aluno.nome}: ${(aluno.nota1 + aluno.nota2 + aluno.nota3 + aluno.nota4) / 4}`);
});
