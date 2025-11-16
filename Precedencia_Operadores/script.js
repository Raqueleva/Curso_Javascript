// Precedência dos Operadores

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence */

/*
== signigica igual
=== significa igual também
|| significa ou
&& significa e
*/

// let resultado = (3 + 4) * 5
// console.log(resultado)

// let num1 = 5

// if (num1 == 5 || (num === 3 && num1 > 8)) {
//   console.log('Resultado correto')
// } else {
//   console.log('Resultado incorreto')
// }

///////////////////////////

// O Switch e Case
// Dia 1 é Domingo

// let dia = 7

// switch (dia) {
//   case 1:
//     console.log('Domingo')
//     break
//   case 2:
//     console.log('Segunda')
//     break
//   case 3:
//     console.log('Terça')
//     break
//   case 4:
//     console.log('Quarta')
//     break
//   case 5:
//     console.log('Quinta')
//     break
//   case 6:
//     console.log('Sexta')
//     break
//   case 7:
//     console.log('Sábado')
//     break
//   default:
//     console.log('Dia inválido')
//     break
// }

///////////////////////////

// O Switch e Case (se parece com IF e ELSE)
// Nivel do usuário no nosso sistema

// let userLevel = 'admin'
// //admin, editor ou guest

// switch (userLevel) {
//   case 'admin':
//     console.log('Full Access')
//     break
//   case 'editor':
//     console.log('Access Editor')
//     break
//   case 'guest':
//     console.log('Access Guest')
//     break
//   default:
//     console.log('Unknown Access')
//     break
// }

///////////////////////////

/* Criar uma soluão com o "Switch" que retorne:
hora < 12 : Bom dia
hota < 18 : Boa tarde
hora >= 18 : Boa noite
A hora deve ser coletada do sistema local.
*/

// let dataAtual = new Date()
// let horaAtual = dataAtual.getHours()
// // se baseia na data e hora acima

// switch (true) {
//   case horaAtual < 12:
//     console.log('Bom dia')
//     break
//   case horaAtual < 18:
//     console.log('Boa tarde')
//     break
//   default:
//     console.log('Boa noite')
//     break
// }
