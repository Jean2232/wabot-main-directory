global.owner = ['5511968161803'] 
global.mods = ['5511968161803'] 
global.prems = ['5511968161803'] 
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = 'JeanBot'
global.author = 'JeanBot'

global.multiplier = 69

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Alteração em 'config.js'"))
  delete require.cache[file]
  require(file)
})
