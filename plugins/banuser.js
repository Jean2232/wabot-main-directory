let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Quem?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Mencione um usuário'
    let users = global.DATABASE._data.users
    users[who].banned = true
    conn.reply(m.chat, `banido com sucesso`, m)
}
handler.help = ['banuser <@usuario>']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true

module.exports = handler
