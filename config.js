const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("088429245,")
global.mongodb = process.env.MONGODB_URI || ""
global.port= process.env.PORT || 5000
global.email = 'mbah3678@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'pakistan/multan'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '923096566451'
global.devs = '923096566451';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'Takeoff' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Takeoffhacker' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ?'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNjYlU4YlduSmZWSndJTE1LbEVyTHlHOGg0cVJjVWxCQThJbHMvZTNYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFdvSXRUQm5LOU9BaWR6dGtaNDRESmJjcDczeVlEZk1mZW5tYVdCNGgwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RjllT1FZWUdzRlE1SzRIVVNFelpyVmR4d1RHOVhiZmZvNmQwZWYxazFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPU0Q5ZXJqalhUUmJCR1NidW0zVXRDaFk3Q2dSS3V1TGlEelpVOFdlWW40PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1Od1g5WTRySWpUTzhkUkZlbmtlS0dpNGlGM3dTVW16eEU1WmZlY2ltM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNxS29nYmtKdUhWMnl5aUUwVUY1UUl4bUROdi80Z1UrTG1iWmg1VlNxajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhtOWxJNVI5MUt5SjBQVWdmZzFTNlJvT0dLcDI2YVhiNmZrRG9YRWVtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiamJZTGt5ZzF2VDZFTWphVnhjdEZGakloTVVrZnVuRC9ieXBjdDMwb0Z4OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlYvSjlKUjljYjRqZGpEbG1TMVNSWXhDK2pNcVBoQVZUcGllbHF2Rk41eGN4OGlUWXFLRmN1aTZjbWFEbmFXSG8vblBrRnJQSEFubjd2bVhCL0RDSWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjYsImFkdlNlY3JldEtleSI6IlJFcXFzY1RvektpaEFpaS92SCtjNHBsVzNGNTZ4WG16SzQ4MWcrcittQUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InkxMk84YWtEU2EtMHZvLXp5d1NQV1EiLCJwaG9uZUlkIjoiN2RjNGUxYzItYTU3OS00ZTEzLTgxODQtODhiMzdhMWQ5MzNjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9lRGVkT3FyR0tLdUJJbTYxZzNScS9FaGsyZz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZldIY0ZHbGtGRjhFSDVFaTNJazNjQVVDbm89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzExTFkzV0wiLCJtZSI6eyJpZCI6IjIzMjg4NDI5MjQ1OjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOUHB6SzBERUtIQ2g3TUdHQWtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkanNxTWQxT1U0dElJdzZJK3VvOUR2bkNTTDduV0RUVWFkOXBBd0J2OUI4PSIsImFjY291bnRTaWduYXR1cmUiOiJYTWtKaXgwWERLTHdsZkQ2R21aYXJ6OEtOR1BJNzE2REwrUld6dENycjdlVXQ5Wmc0b2M0ei9IcUc5b2xXdjZIdDl0Q1VhZGFqUVNVdFA5bXJNd0VDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUW82OUROblA5dEg5cXZvN3dhTWxvQmR2MmN1RjYyanM0WGVXVzFIbVh6YjJyYzRTSExiOUZsbjg1ZkRzcUFuUVAxYXgrY3JsQXVsL3FobCtJOG4yamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzI4ODQyOTI0NToxMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYWTdLakhkVGxPTFNDTU9pUHJxUFE3NXdraSs1MWcwMUduZmFRTUFiL1FmIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE3NjkwNjcwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUJSTSJ9' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Naveed-Dogar' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'King-Md' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
