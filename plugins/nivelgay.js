let handler = async (m, { conn, command, text }) => {
    random = `${Math.floor(Math.random() * 100)}`
    conn.reply(m.chat, `
    🏳️‍🌈🏳️‍🌈 nivel gay de ${text}: ${random}% gay esse aikkkkkkk 🏳️‍🌈🏳️‍🌈
    `.trim(), m, m.mentionedJid ? {
        contextInfo: {
          mentionedJid: m.mentionedJid
        }
      } : {})
    }
    handler.help = ['nivelgay <@membro>']
    handler.tags = ['kerang']
    handler.command = /^nivelgay$/i
    handler.owner = false
    handler.mods = false
    handler.premium = false
    handler.group = false
    handler.private = false
    
    handler.admin = false
    handler.botAdmin = false
    
    handler.fail = null
    
    module.exports = handler
    
    function pickRandom(list) {
      return list[Math.floor(Math.random() * list.length)]
    }