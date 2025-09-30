// ARRAYS

const numeros1 = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros1.length; i++) {
    console.log(numeros1[i]);
}


const frutas = ['maçã', 'banana', 'laranja'];

frutas.push('morango');
frutas.shift();

console.log(frutas);


const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros2.filter(num => num % 2 === 0);

console.log(numerosPares);


const numeros3 = [5, 12, 8, 23, 7];

const maiorValor = Math.max(...numeros3);

console.log(maiorValor);


const numeros4 = [1, 2, 3, 4, 5];

const soma = numeros4.reduce((acc, num) => acc + num, 0);

console.log(soma);