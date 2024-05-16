const path = require('path')
// //
// const filePath = path.join('contents', 'subfolder', 'test.txt')
// console.log(filePath)

// const base = path.basename(filePath)
// console.log(base)

const absolute = path.resolve(__dirname, 'contents', 'subfolder', 'test.txt')
console.log(absolute)
