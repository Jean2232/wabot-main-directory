let handler = async (m, { conn }) => {
    m.reply('Não adicione e nem envolva o bot em coisas pessoais! \n Os admins e mods do bot tem acesso a *todas* as conversas do bot! \nNão mande e nem faça figurinha de nenhum conteúdo sensivel, principalmente envolvendo a sua imagem! \n Não adicione o bot em grupos que não permitem links! \n Eu não tenho paciencia pra te ensinar a criar um bot :|')
    return true
  }
  handler.help = ['Não adicione e nem envolva o bot \n│ em coisas pessoais! \n│ Os admins e mods do bot tem acesso \n│ a *todas* as conversas do bot!', 'Não mande e nem faça figurinha de \n│ nenhum conteúdo sensivel, principalmente \n│ envolvendo a sua imagem!', 'Não adicione o bot em grupos que não \n│ permitem links!', 'Eu não tenho paciencia pra te ensinar a criar um bot :|']
  handler.tags = ['avisos']
  handler.command = /^avisos$/i
  handler.owner = false
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  handler.exp = 0
  
  module.exports = handler