let handler = function (m) {
  if (!m.quoted) throw 'Responda para uma mensagem do bot!'
  let { fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw 'bah'
  if (!isBaileys) throw 'Eu só posso apagar minhas mensagens, né'
  this.deleteMessage(m.chat, {
    fromMe,
    id,
    remoteJid: m.chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)?$/i

module.exports = handler
