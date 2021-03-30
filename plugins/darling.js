let handler = async (m, { conn, command, text }) => {
    conn.reply(m.chat, `𝚍 𝚊 𝚛 𝚕 𝚒 𝚗 𝚐 編集 https://chat.whatsapp.com/JujTrW6KxA0JPlyH6q6OGs
  `.trim(), m, m.mentionedJid ? {
      contextInfo: {
        mentionedJid: m.mentionedJid
      }
    } : {})
  }
  handler.help = ['darling <link do grupo ofc do bot>']
  handler.tags = ['info']
  handler.command = /^darling$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  module.exports = handler