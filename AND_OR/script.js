// IF e ELSE com Operadores Lógicos (&& E , || OU)

// Criar um site de eventos online. Idade mínima 18, registro = true
// if (condicao_1 condicao_2)

// let idadeParticipante = 17
// let regitroOnline = true

// if (idadeParticipante >= 18 && regitroOnline) {
//   console.log('Bem vindo ao evento')
// } else {
//   console.log('Você precisa ter no mínimo 18 anos e estar registrado no evento')
// }

////////////////////////////

/* App onde o candidato vai receber um desconto se
for estudante ou tiver um cupom de desconto. */

// let estudante = false
// let cupom = true

// if (estudante || cupom) {
//   console.log('Você tem acesso a promoção especial')
// } else {
//   console.log(
//     'Você precisa ter acesso a um cupom ou ser estudante para ter acesso a promoção especial'
//   )
// }

//////////////////////////////////

/* App para um restaurante que oferece desconto
para familias maiores que 4 e venham para almoçar
na terça/quarta.
*/

// let membrosFamilia = 3
// let diaDaSemana = 'terca'

// if (
//   (membrosFamilia >= 4 && diaDaSemana === 'terca') ||
//   diaDaSemana === 'quarta'
// ) {
//   console.log('Parabéns! A sua família ganhou um desconto especial.')
// } else {
//   console.log('Desculpe, a oferta não se aplica a sua família.')
// }

//////////////////////////////////

// Aninhamneto de IF e ELSE

/* App analise de jogo
nivel = true
  >= 90 - Ouro
  >= 75 - Prata
  <  60 - Bronze
nivel = false
Você tem que terminar o nivel primeiro.
*/

// let nivelCompleto = false
// let pontuacaoJogador = 80

// if (nivelCompleto) {
//   if (pontuacaoJogador >= 90) {
//     console.log('Medalha de Ouro')
//   } else if (pontuacaoJogador >= 75) {
//     console.log('Medalha de Prata')
//   } else {
//     console.log('Medalha de Bronze')
//   }
// } else {
//   console.log('Você precisa finalizar o nivel do jogo primeiro.')

// Obs.: O primeiro if apesar de aparecer como nível nivelCompleto
// ele verifica a pontuacaoJogador e no else separado
// ele confere o nível se for false ele dá somente a
// mensagem da ultima mensagem do ultimo else.

//////////////////////////////

/* Exercício: Vamos criar um sistema de autenticação que verifica
várias condições antes de permitir acesso.

let usurioValido
let senhaCorreta
Let temPermissao

Mensagens:
Acesso permitido!
Acesso negado. Usuário sem permisão.
Senha incorreta. Tente novamente.
Usuário não encontrado.
*/

// let usurioValido = true
// let senhaCorreta = true
// let temPermissao = true

// if (usurioValido) {
//   if (senhaCorreta) {
//     if (temPermissao) {
//       console.log('Acesso permitido!')
//     } else {
//       console.log('Acesso negado. Usuário sem permisão.')
//     }
//   } else {
//     console.log('Senha incorreta. Tente novamente.')
//   }
// } else {
//   console.log('Usuário não encontrado.')
// }

////////////////////////////////
