// Coerção (conversão) de Tipos

// Coerção Explícita (Manual)

const numero = 10;
console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number('2005'));
console.log(parseFloat('09.03'));
console.log(parseInt('09.03'));
console.log(Boolean(190));
console.log(Boolean(0));

console.clear();

// Coerção Implícita (Automática)

console.log(10 + '1');
console.log(10 - '1');
console.log(10 - 'asdad');

let n = 1 + '1';

n = n - 1;

console.log(n);

console.log(2 + 3 + 4 + '5');

console.log('5' + 2 + 3 + 4);

console.log('10' - '4' - '3' - 2 + '5');