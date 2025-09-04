const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yts-search')


cmd({
    pattern: "song",
    desc: "download songs",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if(!q) return reply("please give me url or title")
 const search = await yts(q),
 const data = search. videos[0];
 const url = data. url

let desc = '
⭐ *LAKSHAN-MD-BOT song DOWNLOADER* ⭐
    
    title: ${data.title}
    description: ${data.description}
    time: ${data.timestamp}
    ago: ${data.ago}
    views: ${data.views}
    
    MADE BY LIYANAARACHCHI AVISHKA THIMIRA LAKSHAN 💚
    '
    await conn.sendMessage(from,{image:{url: date.thumbnail},caption:desc}, {quoted:mek});
   //download audio

   let down = await fg.yta(url)
   let downloadUrl = down.dl_url

    //send audio + document message
    await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg"},{quoted:mek})
    await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"audio/mpeg",fileName:data.title + ".mp3",caption:"MADE BY LIYANAARACHCHI AVISHKA THIMIRA LAKSHAN 💚"},{quoted:mek})
    
}catch(e){
console.log(e)
reply('${e}')
} 
})


//==============video-dl=================

cmd({
    pattern: "video",
    desc: "download videos",
    category: "downlod",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
 if(!q) return reply("please give me url or title")
 const search = await yts(q),
 const data = search. videos[0];
 const url = data. url

let desc = '
⭐ *LAKSHAN-MD-BOT VIDEO DOWNLOADER* ⭐
    
    title: ${data.title}
    description: ${data.description}
    time: ${data.timestamp}
    ago: ${data.ago}
    views: ${data.views}
    
    MADE BY LIYANAARACHCHI AVISHKA THIMIRA LAKSHAN 💚
    '
    await conn.sendMessage(from,{image:{url: date.thumbnail},caption:desc}, {quoted:mek});
   //download video

   let down = await fg.ytv(url)
   let downloadUrl = down.dl_url

    //send vidaudio + document message
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4"},{quoted:mek})
await conn.sendMessage(from,{document:{url:downloadUrl},mimetype:"video/mp4",fileName:data.title + ".mp4",caption:"MADE BY LIYANAARACHCHI AVISHKA THIMIRA LAKSHAN 💚"},{quoted:mek})
    

}catch(e){
console.log(e)
reply('${e}')
} 
})
