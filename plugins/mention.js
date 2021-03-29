let handler = async (m, { conn, text }) => {
  if (!text) throw 'Cadê o texto?'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['menção <texto>']
handler.tags = ['tools']

handler.command = /^menção$/i

module.exports = handler
