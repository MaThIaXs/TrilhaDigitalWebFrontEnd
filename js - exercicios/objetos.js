// Objetos

// Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Matheus',
    idade: 18
}

console.log(pessoa);

console.log(pessoa.nome);
// console.log(pessoa['nome']); forma alternativa
console.log(pessoa.idade);

console.clear();

// Como adicionar um par chave-valor?

pessoa.altura = 1.82;

console.log(pessoa);

console.clear();

// Como remover um par chave-valor?

delete pessoa.idade;

console.log(pessoa);

console.clear();

// Como percorrer?

for(let chave in pessoa) {
    console.log(chave);
}
