const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw '❗️ Foto/Video não encontrado ❗️'
      stiker = await sticker(img, false, global.packname, global.author)
    } else if (args[0]) stiker = await sticker(false, args[0], global.packname, global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw '❌ Falha ❌'
  }
}
handler.help = ['figurinha', 'sticker', 'stickergif', 'stkr', 'fig']
handler.tags = ['sticker']
handler.command = /^(sticker|stickergif|figurinha|stkr|fig|stiker)$/i

module.exports = handler
