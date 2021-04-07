const Discord = require("discord.js")
const fetch = require('node-fetch')
const client = new Discord.Client()
const keepAlive = require('./server')

//dummmy data
const sadWords = ["sad', 'emo', 'hais', angry"]
const replySadWords = [
  'why u emo', 'u ok?', 'dont emo leh'
  ]


//api calls
function getQuote() {
  return fetch("https://zenquotes.io/api/random")
    .then(res => {
      return res.json()
    })
    .then(data => {
      //"q" is getQuote
      //"a" is author
      return data[0]["q"] + "-" + data[0]["a"]
    })
}

function fetchPokemon(){
  fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then(res => {return res.json()})
  .then(data => {return data[0]})
}


//client ready?
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//messages
client.on('message', msg => {
  if (msg.author.bot) return

  if (msg.content === 'how my stocks looking') {
    msg.reply('Looking good ;)')
  }
  if (msg.content === 'i need money') {
    msg.reply('get some sugar mummy boy')
  }
  if (msg.content.toLowerCase() === 'stfu') {
    msg.reply('bye')
  }
  if (msg.content.toLowerCase() === 'tsla') {
    msg.reply('TO THE MOON')
  }
  if (msg.content.toLowerCase() === 'btc') {
    msg.reply('Sell now pls')
  }
  if (msg.content.toLowerCase() === 'inspire') {
    getQuote().then(quote => msg.channel.send(quote))
  }
  if (msg.content.includes() === 'inspire') {
    getQuote().then(quote => msg.channel.send(quote))
  }
  if (msg.content.includes() === 'pokemon') {
    fetchPokemon().then(pokemon => msg.channel.send(pokemon))
  }
})

keepAlive()
client.login(process.env.TOKEN)