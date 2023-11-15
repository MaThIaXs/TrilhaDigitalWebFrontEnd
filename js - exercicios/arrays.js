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