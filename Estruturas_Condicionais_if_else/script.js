// IF e ELSE (Se, Se não) Fluxo de código

/*

if (condição_1) {
  // Vai executar se a condição_1 for verdadeira
  } else if (condição_2)
  // Vai executar se a condição_1 for falsa e a condição_2 verdadeira
  } else {
    // Vai executar se todas as condiçõe forem falsas
  }

*/

// let hour = 19

// if (hour <= 12) {
//   console.log('Bom dia')
// } else if (hour <= 18) {
//   console.log('Boa tarde')
// } else {
//   console.log('Boa noite')
// }

///////////////////////////

/* NÃO É RECOMENDADO */
// Mas no Javascript não há obrigatoriedade de inserir {}
// let hour = 6

// if (hour <= 12) console.log('Bom dia')
// else if (hour <= 18) console.log('Boa tarde')
// else console.log('Boa noite')

///////////////////////////

// EXERCÌCIO //

/*
Se a pontuação for 90 ou mais, será exibido "Excelente!". Se for 75 ou mais (mas menos que 90),
srá "Muito bom!". Para pontuações inferiores a 75, será "Você pode melhorar!".
*/

let pontuacao = 90

if (pontuacao >= 90) {
  console.log('Excelente!')
} else if (pontuacao >= 75) {
  console.log('Muito bom!')
} else {
  console.log('Você pode melhorar!')
}

///////////////////////////
