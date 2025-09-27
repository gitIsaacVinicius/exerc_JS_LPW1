// 17. Filtrar Números Pares (filter):
// Dado o array [10, 15, 20, 25, 30], use filter para criar um array apenas com
// números pares.

const numeros = [10, 15, 20, 25, 30]

const numPar = numeros.filter(num => num % 2 === 0)

console.log(`Os números pares são: [${numPar}]`)