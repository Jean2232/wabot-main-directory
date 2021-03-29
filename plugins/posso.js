let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `${pickRandom(['*Não pode*','*Pode*'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['posso <pergunta>?']
handler.tags = ['kerang']
handler.command = /^posso$/i
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

