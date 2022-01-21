// File System
const fs = require('fs')
const path = require('path')
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if(err) {
//         throw err
//     }
//     console.log('folder was made')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.appendFile(filePath, '\nHello Again!', err => {
//     if (err) {
//         throw err
//     }
//     console.log('file was made')
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
    if(err) {
        throw err
    }

    console.log(content)

    // const data = Buffer.from(content)
    // console.log('content: ',data.toString())
})