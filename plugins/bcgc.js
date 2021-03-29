let handler  = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '「 Transmissão do Bot 」')
  for (let id of groups) conn.copyNForward(id, content)
  conn.reply(m.chat, `Mensagem entregue para ${groups.length} grupos`, m)
}
handler.help = ['bcgc'].map(v => v + '<texto>')
handler.tags = ['owner']
handler.command = /^bcgc$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

