// Onjects and Key Pairs (Dictionary)
// Arrray = Objects

/* Na forma de arrray ficaria desta forma */
// let relogioRaquelInfo = [9.7, 7.53, '86%', 59, 84]

/* Na forma de objeto ficaria desta forma */
// const relogioRaquelInfo = {
//   timeInBed: 9.7,
//   totalSleep: '7h53m',
//   sleepEfficiency: '86%',
//   restingHeartRate: 59,
//   SleepScore: 84,
// }
// relogioRaquelInfo.remSleep = '2h15m'
// // Duas formas de mudar uma das strings //
// relogioRaquelInfo.SleepScore = 90
// // relogioRaquelInfo['SleepScore'] = 91
// // ou posso fazer essa mesma função uando //
// // relogioRaquelInfo.SleepScore++
// // posso aumentar meu SleepScore desta forma //
// relogioRaquelInfo['SleepScore'] += 4

// console.log(relogioRaquelInfo)

/* Se eu usaar um ponto dentro do parenteses conforme
abaixo, eu tenho acesso a totas as propriedades do objeto */
// console.log(relogioRaquelInfo.timeInBed)
// console.log(relogioRaquelInfo.totalSleep)
// console.log(relogioRaquelInfo.sleepEfficiency)
// console.log(relogioRaquelInfo.restingHeartRate)
// console.log(relogioRaquelInfo.SleepScore)

//////////////////////////

// const relogioRaquelInfo = {
//   timeInBed: 9.7,
//   totalSleep: '7h53m',
//   sleepEfficiency: '86%',
//   restingHeartRate: {
//     maxHeartRate: 81,
//     minHeartRate: 59,
//   },
//   SleepScore: 84,
// }
// console.log(relogioRaquelInfo)
// console.log(relogioRaquelInfo.restingHeartRate)
// console.log(relogioRaquelInfo.restingHeartRate.maxHeartRate)
// console.log(relogioRaquelInfo.restingHeartRate.minHeartRate)

//////////////////////////

/* Nesta aula incluimos umas notas do motivos
ter influenciado no sono
*/
// const relogioRaquelInfo = {
//   timeInBed: 9.7,
//   totalSleep: '7h53m',
//   sleepEfficiency: '86%',
//   restingHeartRate: {
//     maxHeartRate: 81,
//     minHeartRate: 59,
//   },
//   SleepScore: 84,
//   notes: ['Coffee', '30 Minutes reading'],
// }
// console.log(relogioRaquelInfo)
// console.log(relogioRaquelInfo.notes[1])
// console.log(relogioRaquelInfo.restingHeartRate.maxHeartRate)
// console.log(relogioRaquelInfo.restingHeartRate.minHeartRate)

//////////////////////

// DESAFIO //

let biblioteca = {
  // Objeto para o Gênero "Ficção Científica" //
  ficcaoCientifica: [
    {
      anoPublicacao: 1965,
      autor: 'Frank Herbert',
      titulo: 'Duna',
      publicacao: ['1965', '1967', '1981'],
    },
    {
      anoPublicacao: 1951,
      autor: 'Isaac Asimov',
      titulo: 'Fundação',
    },
  ],
  // Objeto para o Gênero "Fantasia" //
  fantasia: [
    {
      anoPublicacao: 1954,
      autor: 'J.R.R. Tolkien',
      titulo: 'O Senhor dos Aneis',
    },
    {
      anoPublicacao: 1997,
      autor: 'J.K. Rowling',
      titulo: 'Harry Potter',
    },
  ],
}
console.log(biblioteca)

//////////////////////////
