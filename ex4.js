// 4. Diferença de Escopo:
// Declare uma variável let numero = 10 fora de um bloco {}. Dentro do bloco,
// declare novamente let numero = 20. Mostre o valor da variável dentro e fora do
// bloco com console.log.

let numero = 10

function bloco(){
    let numero = 20
    console.log(numero)
}

console.log(numero)
bloco()

