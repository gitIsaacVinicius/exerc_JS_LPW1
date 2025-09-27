// 19. Encadeando Métodos:
// Dado o array [2, 5, 8, 11, 14], use filter para selecionar apenas os números
// maiores que 5 e depois map para multiplicá-los por 2. Mostre o resultado final.

const numeros = [2, 5, 8, 11, 14]

const encadeado = numeros.filter(num => num > 5).map(num => num * 2)

console.log(`Resultado final: [${encadeado}]`)