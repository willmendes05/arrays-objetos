let pessoa = {
  nome: "Lucas",
  idade: 22,
  profissao: "Programador"
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.profissao);


let carro = {
  marca: "Chevrolet",
  modelo: "Onix",
  ano: 2020
};

carro.ano = 2025; // ano de agora
console.log(carro);


let livro = {
  titulo: "Dom Casmurro",
  autor: "Machado de Assis"
};

livro.anoDePublicacao = 1899;
console.log(livro);


let produto = {
  nome: "Notebook",
  preco: 2500,
  quantidade: 5
};

for (let chave in produto) {
  console.log(chave + ": " + produto[chave]);
}


function mostrarObjeto(obj) {
  for (let chave in obj) {
    console.log(chave + ": " + obj[chave]);
  }
}

let aluno = {
  nome: "Carla",
  idade: 21,
  curso: "Design"
};

mostrarObjeto(aluno);