let handler = m => m

let recebido = /bom dia|bodia/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = recebido.exec(m.text)

  if (chat.interacoes && isGroupLink) {
    m.reply('Bom diaaaa')
  }
  return true
}

module.exports = handler