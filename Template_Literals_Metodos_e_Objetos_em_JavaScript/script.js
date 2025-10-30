// Template Literals (nada nçao é que uma versão atualizada da concatenação)

// let firstName = 'Rauel'
// let lastName = 'Evaristo'
// let age = 44
// console.log(
//   'Olá, meu nome é ' +
//     firstName +
//     ' ' +
//     lastName +
//     ' e tenho ' +
//     age +
//     ' anos de idade.'
// ) // concatenação tradicional

// console.log(
//   `Olá, meu nome é ${firstName} ${lastName} e tenho ${age} anos de idade.`
// ) // template literal
// usando template literals

///////////////////////////////////

// Strings Methods

// let texto = 'Estou aprendendo JavaScript'
// conssole.log(texto.charAt(4)) // retorna o caractere na posição especificada (conta-se sempre do 0)
// console.log(texto.includes('JavaScripts')) // verifica se a string contém o valor especificado, retornando true ou false
// console.log(texto.indexOf('aprendendo')) // retorna a posição da primeira ocorrência do valor especificado, ou -1 se não for encontrado
// console.log(texto.slice(6, 14)) // extrai uma seção da string e retorna como uma nova string
// console.log(texto.toUpperCase()) // converte a string para letras maiúsculas
// console.log(texto.toLowerCase()) // converte a string para letras minúsculas
// console.log(texto.repeat(5)) // repete a string o número de vezes especificado
// console.log(texto.replace('Estou', 'Eu estou')) // substitui um valor especificado por outro valor na string
// console.log(texto.startsWith('Estou')) // verifica se a string começa com os caracteres especificados, retornando true ou false
// console.log(texto.endsWith('Script')) // verifica se a string termina com os caracteres especificados, retornando true ou false

// let texto = ' Estou aprendendo JavaScript '
// console.log(texto.trim()) // remove os espaços em branco do início e do fim da string

///////////////////////////////////

// Number Methods

// let num1 = 3.3785

// console.log(num1)
// console.log(num1.toFixed(2)) // arredonda o número para o número de casas decimais especificado
// console.log(num1.toPrecision(2)) // verifica se o valor é um número inteiro, retornando true ou false
// console.log(num1.toString(2)) // converte o número em uma string

///////////////////////////////////

// Metodos Matemáticos (Math)

// let num1 = 2

// console.log(Math.round(num1)) // retorna o valor absoluto do número
// console.log(Math.ceil(num1)) // arredonda o número para cima
// console.log(Math.floor(num1)) // arredonda o número para baixo
// console.log(Math.sqrt(num1)) // retorna a raiz quadrada do número
// console.log(Math.pow(num1, 3)) // retorna o valor elevado ao expoentea raiz quadrada do número
// console.log(Math.abs(num1)) // retorna o valor absoluto do número

// let num1 = -2

// Números Randomicos:
// Se atualizar a página várias vezes, verá que o número retornado é sempre diferente
// console.log(Math.random()) // retorna um número aleatório entre 0 e 1
// console.log(Math.random() * 10 + 1) // retorna um número aleatório entre 1 e 10
// console.log(Math.round(Math.random() * 1000 + 1)) // retorna um número aleatório inteiro entre 1 e 10

///////////////////////////////////

// Objetos (Multiplos valores) - Ex.: Tesla

let carName = 'Cybertruck'
let carRange = 340
let carMaxSpeed = 112
let carHorsePower = 600

let car = {
  carName: 'Cybertruck',
  carRange: 340,
  carMaxSpeed: 112,
  carHorsePower: 600,
}

console.log(car)
// console.log(`Nome do carro: ${car.carName}`)
// console.log(`Autonomia: ${car.carRange} milhas`)
// console.log(`Velocidade Máxima: ${car.carMaxSpeed} mph`)
// console.log(`Potência: ${car.carHorsePower} hp`)

///////////////////////////////////
