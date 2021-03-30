let handler = m => m

let recebido = /oi bot/i
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = recebido.exec(m.text)

  if (chat.interacoes && isGroupLink) {
    m.reply('OOIIEEE! Digite .? para ver minhas funções :)')
  }
  return true
}

module.exports = handler