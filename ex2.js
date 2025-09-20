// 2. Uso de const:
// a. Declare uma constante PI com valor 3.14159. Tente atribuir outro valor a PI e
// veja o erro no console. Explique por que isso acontece.
// b. Declare uma constante SemanasDoAno sem atribuir valor. Na linha seguinte
// atribua o valor 52. O que ocorre?

// a)
const pi = 3.14159
pi = 2
console.log(pi)
// TypeError: Assignment to constant variable. A declaração const cria uma variável na qual o valor é fixo, ou seja, não pode ser alterada ou reatribuída.

// b)
const SemanasDoAno
SemanasDoAno = 52
console.log(SemanasDoAno)
// SyntaxError: Missing initializer in const declaration. A declaração const deve obrigatoriamente receber um valor no momento em que é declarada.