const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./contents/first-text.txt' )
const second = readFileSync('./contents/second-text.txt' , 'utf8')

// console.log(first, second)

writeFileSync('./contents/result-sync-text.txt', `Here is the result: ${first}, ${second}`)



// (   
//     './contents/result-sync2-text.txt',
//     'Here is the result: ${fisrt}, ${second}',
// )