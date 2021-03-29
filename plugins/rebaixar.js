let handler = async (m, { conn, args, usedPrefix }) => {
  let users = m.mentionedJid
  for (let user of users) conn.groupDemoteAdmin(m.chat, user).catch(console.log)
}
handler.help = ['rebaixar'].map(v => v + ' @admin')
handler.tags = ['admin']
handler.command = /^rebaixar$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler

