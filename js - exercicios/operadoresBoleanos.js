// Operadores Boleanos

const numero = 18;

console.log(numero < 20);
console.log(numero > 20);
console.log(numero == 18);
// >=  <=  !=

console.log(numero == 18);
console.log(18 == '18'); // == só compara o conteúdo
console.log(18 === '18'); // === compara conteúdo e tipo de variável

console.clear();

console.log(10 != 10);
console.log(10 != '10');
console.log(10 !== '10');

console.clear();

let idade = 18;
let tenhoCNH = false;

const possoDirigir = idade >= 18 && tenhoCNH === true; // && = AND

console.log(possoDirigir);

console.clear();

idade = 40;

const votoFacultativo = idade < 18 || idade >= 70; // || = OR

const estouGostandoDoCurso = false;

console.log(!estouGostandoDoCurso); // ! = NOT