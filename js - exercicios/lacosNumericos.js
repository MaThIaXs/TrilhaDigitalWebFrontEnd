// Laços Numéricos

const input = require('readline-sync');

// O problema

// const nota1 = Number(input.question('Informe a nota 1: '));
// const nota2 = Number(input.question('Informe a nota 2: '));
// const nota3 = Number(input.question('Informe a nota 3: '));

// let media = (nota1 + nota2 + nota3) / 3;

// Acumulador

let acumulador = 0;

acumulador += 10;//soma 10 com a propria variavel acumulador

acumulador++;//soma 1 no acumulador

console.log(acumulador);

console.clear();

//Estrutura FOR

let nota;
let soma = 0;

for(let i = 0; i < 3; i++) {
    nota = Number(input.question(`Informe a nota ${i + 1} do aluno: `));
    
    soma += nota;
}

console.log(`A média do aluno é: ${(soma / 3).toFixed(2)}`);