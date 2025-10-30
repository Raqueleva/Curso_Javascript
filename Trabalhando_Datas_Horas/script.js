// Data e Hora (Date)

// let agora = Date()
// console.log(agora)

// let dataEspecifica = new Date(2025, 11, 25, 10, 30, 0) // Ano, Mês (0-11), Dia, Hora, Minuto, Segundo
// console.log(dataEspecifica)

// let dataString = new Date('2025/09/15 14:45:00')
// console.log(dataString)

///////////////////////////////

// Métodos de Date

// let data = new Date()

// O dia do mês
// data.setDate(9)
// console.log(data.getDate())
// Mês começa do 0 (Janeiro = 0, Fevereiro = 1, ...)

// O dia da semana
// console.log(data.getDay())
// 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

// O mês
// data.setMonth(0)
// console.log(data.getMonth())
// Mês começa do 0 (Janeiro = 0, Fevereiro = 1, ...)

// O ano
// data.setFullYear(2024)
// console.log(data.getFullYear())

///////////////////////////

// Data e Hora (Date)
// Criar um contador de dia para uma data específica.
// Inicio, Fim, a diferença de dias entre essas datas.

// let inicio = new Date('2025/05/03')
// let fim = new Date('2025/09/15')
// let dias = (fim - inicio) / (1000 * 3600 * 24)

// console.log(dias)

////////////////////////////

//Data e Hora (Date) Idioma
//Brasil(DD-MM-AAAA) - EUA(MM/DD/AAAA)

// let data
// data = Intl.DateTimeFormat('pt-BR').format(data)
// console.log(data)

///////////////////////////////
