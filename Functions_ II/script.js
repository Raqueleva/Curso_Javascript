// Functions (function)

// function saudacao(nome) {
//   function mensagem() {
//     console.log('Olá ' + nome)
//   }
//   return mensagem()
// }
// saudacao('Raquel')

////////////////////////////////

// Criar um app para gerar os 6 números da mega sena //

// function gerarNumero() {
//   console.log(Math.floor(Math.random() * 60)) + 1
// }

// function rodarSorteio() {
//   gerarNumero()
//   gerarNumero()
//   gerarNumero()
//   gerarNumero()
//   gerarNumero()
//   gerarNumero()
// }
// rodarSorteio()

////////////////////////////////

// Function Declaration (associa o nome)

// function somar(num1, num2) {
//   return num1 + num2
// }
// console.log(somar(10, 20))

// Function Expression (associa a uma variável)

// const subtrair = function (num1, num2) {
//   return num1 - num2
// }
// console.log(subtrair(20, 10))

////////////////////////////////

// Arrow Function Implicity Return //

/* É o mesmo calculo feito no Function Declaration,
porém, mais reduzida */

// const subtrair = (num1, num2) => num1 - num2
// console.log(subtrair(50, 10))

////////////////////////////////

// Arrow Function Sem o Implicity Return //
/* É o mesmo calculo feito no Function Expression,
porém, posso adicionar mais linhas antes do
return */

// const subtrair = (num1, num2) => {
//   console.log('Hello')
//   return num1 - num2
// }
// console.log(subtrair(40, 10))

////////////////////////////////
