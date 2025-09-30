let livros = [
  { titulo: "biblia", autor: "Deus", anoDePublicacao: 1 },
  { titulo: " O Alquimista", autor: "Paulo Coelho", anoDePublicacao: 1988 },
  { titulo: "Dom Casmurro", autor: "Machado de Assis", anoDePublicacao: 1899 }
];

for (let livro of livros) {
  console.log(livro.titulo);
}


let carros = [
  { marca: "Fiat", modelo: "punto", ano: 2012 },
  { marca: "Chevrolet", modelo: "Onix", ano: 2021 },
  { marca: "Toyota", modelo: "Corolla", ano: 2023 },
];

for (let carro of carros) {
  carro.ano = 2025;
}

console.log(carros);


let pessoas = [
  { nome: "Ana", idade: 25, cidade: "São Paulo" },
  { nome: "Carlos", idade: 35, cidade: "Rio de Janeiro" },
  { nome: "Marina", idade: 28, cidade: "Belo Horizonte" }
];

let pessoaMaior30 = pessoas.find(p => p.idade > 30);

console.log(pessoaMaior30.nome);
