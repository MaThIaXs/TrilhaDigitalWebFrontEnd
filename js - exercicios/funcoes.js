// Funções

// Definindo a função
function saudacao() {
    console.log('Olá, seja bem-vindo(a) ao nosso curso de JavaScript!');
}

// Chamando a função
saudacao();

console.clear();

// Como enviar parâmetros para as funções

function saudacaoComParametro(nome, curso = 'JavaScript') {
    console.log(`Olá ${nome}, seja bem-vindo(a) ao nosso curso de ${curso}!`);
}

saudacaoComParametro('Matheus');

console.clear();

// Retorno da função

function soma(numero1, numero2) {
    return numero1 + numero2; // função acaba no return
}
const resultado = soma(10, 20);

console.log(resultado);

console.clear();

function maiorDoQue50(numero) {
    if(numero > 50) {
        return true;
    }

    return false;
}
console.log(maiorDoQue50(60));