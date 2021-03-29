let handler = async (m, { conn, command, text }) => {
random = `${Math.floor(Math.random() * 27)}`
conn.reply(m.chat, `
😏😏😏 tamanho do pau de ${text}: ${random}cm 😏😏😏
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['tamanhodopau <@membro>?']
handler.tags = ['kerang']
handler.command = /^tamanhodopau$/i
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
