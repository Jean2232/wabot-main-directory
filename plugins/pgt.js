let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pergunta:* ${text}
*Resposta* ${pickRandom(['Sim','Talvez sim','Talvez','Provavelmente não','Não'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['pgt <pergunta>?']
handler.tags = ['kerang']
handler.command = /^pgt$/i
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

