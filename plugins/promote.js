let handler = async (m, { conn, args }) => {
  let users = m.mentionedJid
  conn.groupMakeAdmin(m.chat, users)
}
handler.help = ['promover'].map(v => 'o' + v + ' @membro')
handler.tags = ['admin']
handler.command = /^promover$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler