const os =require('os')

console.log('operational system: ', os.platform())


console.log('processor architecture: ', os.arch())

console.log('CPU info', os.cpus())

console.log('Free memory: ', os.freemem())

console.log('Total memory: ', os.totalmem())

console.log('Home directory: ', os.homedir()) 

console.log('turn on: ', os.uptime())