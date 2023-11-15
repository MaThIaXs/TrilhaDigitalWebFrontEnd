// Laços Condicionais

// npm install readline-sync
// importando a biblioteca
const input = require('readline-sync');

const numeroSorteado = Math.floor(Math.random() * 10 + 1); //Pegando um numero inteiro aleatorio de 1 a 10

let numero = Number(input.question('Teste sua sorte! Qual numero voce escolhe? '));

while(numero !== numeroSorteado) {
    console.log('Você errou! Tente Novamente...');

    numero = Number(input.question('Qual numero voce escolhe? '));
}

console.log('Parabéns! Você acertou!');