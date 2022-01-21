const path = require('path')

console.log('file name: ', path.basename(__filename))

console.log('name of dir: ', path.dirname(__filename))

console.log('extension of file:', path.extname(__filename))

console.log('Parse:', path.parse(__filename).name)

console.log(path.join(__dirname, 'server', 'index.html'))