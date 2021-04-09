let handler = function (m) {
  this.sendContact(m.chat, '5511968161803', 'Jeannn', m)
}
handler.help = ['owner <chama ele aí :)>', 'dono <chama ele aí :)>', 'jean <chama ele aí :)>']
handler.tags = ['info']

handler.command = /^(owner|dono|jean)$/i

module.exports = handler
