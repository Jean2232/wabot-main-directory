let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Por que você não vai no terminal? preguiçoso!', m)
  else {
    await conn.reply(m.chat, 'Adeuskkkk :\')', m)
    conn.close()
  }
}
handler.help = ['stop']
handler.tags = ['jadibot']
handler.command = /^(berhenti|stop)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

