let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'npm start'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Reiniciando... aguarde!')
    await global.DATABASE.save()
    process.send('reset')
  } else throw '_oooiiiieeee..._'
}
handler.help = ['reiniciar']
handler.tags = ['host']
handler.command = /^reiniciar$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

