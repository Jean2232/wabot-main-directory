let handler = async (m, { conn, usedPrefix, command, text, args, isROwner }) => {
    let isEnable = /true|enable|(turn)?on/i.test(command)
    let chat = global.DATABASE._data.chats[m.chat]
    let user = global.DATABASE._data.users[m.sender]
    let type = (args[0] || '').toLowerCase()
    let isAll = false
    let isUser = false
    switch (type) {
       case 'interacoes':
        chat.interacoes = isEnable
        break
      default:
        return m.reply(`
  Opções: welcome | delete | interacoes
  
  Exemplo:
  ${usedPrefix}ativar interacoes
  ${usedPrefix}desativar interacoes
  `.trim())
    }
    m.reply(`Feito!`.trim())
  }
  handler.help = ['a', 'desa'].map(v => v + 'tivar interacoes \n | -Mensagens automáticas')
  handler.tags = ['interruptores', 'owner']
  handler.command = /^((a|desa)tivar|(turn)?o(n|ff))$/i
  
  module.exports = handler
  