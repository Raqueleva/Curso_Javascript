// Data Types
// Primitives vs Reference Types

// let num1 = 10
// let num2 = 2

// console.log(num1 + num2)

// Tipos Primitivos
// String - é um texto
let firstName = 'Raquel'
console.log(firstName, typeof firstName)

// Number - é um número
let age = 30
console.log(age, typeof age)

// Boolean - é verdadeiro ou falso
let isAdult = true
console.log(isAdult, typeof isAdult)

// Null - é um valor nulo
let address = null
console.log(address, typeof address)

// Undefined - é um valor indefinido
let color
console.log(color, typeof color)

// Symbol - é um valor único
let id = Symbol('id')
let meuObjeto = {
  [id]: 123456,
}
console.log(meuObjeto[id])

// Data Types
// Reference Data Types

// Array - é uma lista de valores
let numbers = [10, 20, 30, 40, 50]
console.log(numbers, typeof numbers)

// Function - é uma função
function myName() {
  console.log('Raquel')
}
console.log(myName, typeof myName)

// Object - é um objetoe
let now = new Date()
console.log(now)
