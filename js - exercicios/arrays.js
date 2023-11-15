// Arrays

// Como criar um array?

// let nome = 'Matheus'; 
// let idade = 18; 
// let altura = 1.82; 
// let estudando = true; 

let arr = [
    'Matheus',
    18,
    1.82,
    true
];

console.log(arr);

console.clear();

// Como acessar os elementos do array?

console.log('Primeiro elemento: ', arr[0]); //sempre começa pelo índice 0
console.log('Segundo elemento: ', arr[1]);
console.log('Terceiro elemento: ', arr[2]);
console.log('Quarto elemento: ', arr[3]);

console.clear();

// Como obter o tamanho do array?

console.log('Tamanho do array: ', arr.length);

console.clear();

// Percorrendo arrays

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.clear();

for(let elemento of arr) { //percorre os elementos do array
    console.log(elemento);
}

console.clear();

for(let indice in arr) { //percorre os índices do array
    console.log(indice, arr[indice]);
}

console.clear();

// Métodos de Array

let arr1 = [30, 12, 45, 34, 29];
let arr2 = [];

// Fatiamento: slice

console.log(arr1.slice(0, 2)); // pega os elementos do indice 0 até o 2
console.log(arr1.slice(2)); // pega os elementos a partir do indice 2

console.clear();

// Adicionando elementos: push | unshift

console.log('Antes de adicionar: ', arr2);

arr2.push(18, 'Matheus');
arr2.push(26);

console.log('Depois de adicionar: ', arr2); // adiciona o elemento no final do array

console.log('Antes de adicionar com unshift: ', arr2);

arr2.unshift('Brasil');

console.log('Depois de adicionar com unshift: ', arr2); // adiciona o elemento no inicio do array

console.clear();

// Removendo elementos: pop | shift

console.log('Antes de remover com o pop: ', arr2);

const elementoRemovido = arr2.pop(); // é possível guardar o elemento que foi removido

console.log('Depois de remover com o pop: ', arr2); // remove o ultimo elemento
console.log('Elemento removido com o pop: ', elementoRemovido);

console.log('Antes de remover com o shift: ', arr2);

arr2.shift();

console.log('Depois de remover com o shift: ', arr2); // remove o primeiro elemento

console.clear();

// Concatenando arrays: concat

console.log('arr1 ', arr1);
console.log('arr2 ', arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();

// Buscando elementos: indexOf | lastIndexOf

console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34); // mostra o indice do primeiro elemento mencionado (caso tenha mais de um igual)
console.log(indiceDoElemento34);

let arr3 = [
    'Matheus',
    'Santos',
    'JavaScript',
    'Santos',
    'Matheus'
]

console.log(arr3);

let indiceDoUltimoElemento = arr3.lastIndexOf('Matheus'); // mostra o indice do ultimo elemento mencionado (caso tenha mais de um igual)
console.log(indiceDoUltimoElemento);

console.clear();

// Descobrindo a existência de um elemento: includes

console.log(arr1);
console.log(arr1.includes(10));
console.log(arr1.includes(12));

console.clear();

// Invertendo arrays: reverse

console.log('arr1 normal: ', arr1);

const arr1Invertido = arr1.reverse();

console.log('arr1 invertido: ', arr1Invertido);