// Truthy e Falsy
/* Você espera um valor booleano quando
usa (IF ELSE Loop, Operadores lógicos)
*/

// let texto = 'Raquel' // Truthy
// let texto = '' // Falsy

// if (texto) {
//   console.log('Existe um texto')
// } else {
//   console.log('Não existe um texto')
// }

/////////////////////

/* O que é Falsy (0 null undefined NaN)
 */

// let texto = 0

// if (texto) {
//   console.log('Truthy')
// } else {
//   console.log('Falsy')
// }

///////////////////////////

// Operador Ternário

// let idade = 16

// if (idade < 18) {
//   console.log('Menor de idade')
// } else {
//   console.log('Maior de idade')
// }

// let idade = 16

// let resultado = idade < 18 ? 'Menor' : 'Maior'
// console.log(resultado)

// // A ? representa o if
// // O : representa o elfe

//////////////////////////////

/*
FORMA MAIS FÁCIL DE TRABALHAR USANDO "Truthy e Falsy"
*/

// let idade = 19

// idade < 18 ? console.log('Menor de idade') : console.log('Maior de idade')

//////////////////////////////

// Desafio Operador Ternário

// let nota = 30
// let avaliacao

// if (nota >= 90) {
//   avaliacao = 'Excelente'
// } else if (nota >= 70) {
//   avaliacao = 'Bom'
// } else if (nota >= 50) {
//   avaliacao = 'Satisfatório'
// } else {
//   avaliacao = 'Insatisfatório'
// }

// console.log(avaliacao) //"Bom"

// let nota = 80
// let avaliacao =
//   nota >= 90
//     ? 'Excelente'
//     : nota >= 70
//     ? 'Bom'
//     : nota >= 50
//     ? 'Satisfatório'
//     : 'Insatisfatório'
// console.log(avaliacao)
