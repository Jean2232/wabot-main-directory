let handler = m => m

let recebido = /boa tarde/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = recebido.exec(m.text)

  if (chat.interacoes && isGroupLink) {
    m.reply('Boa tarde, amigo')
  }
  return true
}

module.exports = handler