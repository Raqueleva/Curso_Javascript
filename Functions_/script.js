// Functions - Funções! //

/* Parametros saõ: num1 e num2, o
nome da function é o somar */
// function somar(num1, num2) {
//   console.log(num1 + num2)
// o console é o conteúdo da função //
// }

/* Somar = Invoking a function são: 10 e 4
e o 10 e 4 são os argumentos */
// somar(10, 4)

////////////////////////////////////////////////

// function subtrair(num1, num2) {
//   console.log(num1 - num2)
// }

// subtrair(10, 4)

////////////////////////////////////////////////

/* Sempre que se utiliza return nada é executado
 após ele do que está dentro das {} conforme o
 exemplo do Hello, se quiser que apareça coloque
 antes do return */

// function somar(num1, num2) {
//   console.log('Hello')
//   return num1 + num2
//   // console.log('Hello')
// }

// let reultado = somar(10, 4)
// console.log(reultado)

////////////////////////////////////////////////

// Functions - Parâmetros Padrão

// function calcularTotal(preco, desconto) {
//   let valorDesconto = preco * desconto
//   let totalCompra = preco - valorDesconto
//   return totalCompra
// }
// console.log(calcularTotal(100, 0.1))
// console.log(calcularTotal(100, 0.2))

/* Se eu quiser fixar um valor para o desconto
eu insiro na function, mas posso alterar no
console se necessário aumentar o desconto variável */

// function calcularTotal(preco, desconto = 0.1) {
//   let valorDesconto = preco * desconto
//   let totalCompra = preco - valorDesconto
//   return totalCompra
// }
// console.log(calcularTotal(100, 0.3))

//////////////////////////////////////

// Functions Parametros Rest

/* Tudo que eu add na minha lista ea automaticamente
inclui na console.log('Itens da minha lista: ' + itens) */

// function listaCompra(...itens) {
//   console.log(itens)
//   console.log('Itens da minha lista: ' + itens)
// }
// listaCompra('Pao', 'Carne', 'Milho')

//////////////////////////////////////
