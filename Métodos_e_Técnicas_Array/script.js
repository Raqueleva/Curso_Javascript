// Arrays (Métodos)

// let cart = ['Agua', 'Arroz', 'Carne', 'Feijão']
// let numbers = [10, 20, 33, 40, 5, 14, true]

// cart[4] = 'Suco'
// cart.push('Suco')
// console.log(cart.length)

// Remover o últimom item da lista
// cart.pop()
// console.log(cart)

// Remover o primeiro item da lista
// cart.shift()
// console.log(cart)

// Adicionar item no inicio da lista
// cart.unshift('Leite')
// console.log(cart)

// Organiza em ordem alfabética
// cart.sort()
// console.log(cart)

//////////////////////////////

// let cart = ['Agua', 'Arroz', 'Carne', 'Feijão']
// let numbers = [10, 20, 33, 40, 5, 14, true]
// let y

// Identifica o ítem iniciado em letra maiuscula ou maiuscula
// y = cart.includes('Agua')
// console.log(y)

// y = cart.indexOf('Feijão')
// console.log(y)

// Identifica quais o itens á partir do item inserido dentro do slice (mas ele não inclui o último item da lista)
// y = cart.slice(1, 3)

// Identifica quais o itens á partir do item inserido dentro do splice (neste ele inlcui todos os itens da lista)
// y = cart.splice(1, 3)
// console.log(y)
// console.log(cart)
// Quando add o console.log(cart) ele só usou o que sobrou do console.log(y)

// Realizando Chain com Métodos

// let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
// let numbers = [10, 20, 33, 40, 5, 14, true]
// let y

// y = cart.splice(1, 3).sort()
// y = cart.splice(1, 3).reverse().toString().includes('Carne')
// console.log(y)
// console.log(cart)

////////////////////////////////

// Arrays (Nesting) -aninhar-

// let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
// let numbers = [10, 20, 33, 40, 5, 14, true]
// let y
// cart.push(numbers)
// console.log(cart)

// y = cart[4][1]
// console.log(y) //esse resultado vem da secção 2 da array no conosle e do item 1)

let cart = ['Agua', 'Carne', 'Arroz', 'Feijão']
let numbers = [10, 20, 33, 40, 5, 14, true]
let cartNumbers = [cart, numbers]
let y
console.log(cartNumbers)

y = cartNumbers[0][1]
console.log(y)

y = cartNumbers[1][3]
console.log(y)
