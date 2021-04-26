let handler = m => m

let linkRegex = /www.|https:|.com|chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
    m.reply('Sem links aqui!')
    this.groupRemove(m.chat, [m.sender])

  }
  return true

module.exports = handler