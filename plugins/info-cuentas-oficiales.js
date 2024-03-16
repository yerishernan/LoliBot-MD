let media = 'https://qu.ax/dcAc.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `\`『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ 』\`

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 𝙗𝙤𝙩 𝙤𝙛𝙘 (KarAngt)\`
> *${bot}*

\`𝙉𝙪𝙢𝙚𝙧𝙤 𝙙𝙚𝙡 Owner\`
> *wa.me/50487430323*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
\`『  』\`   
* *${md}* 

\`『  ¹ 』\`   
* *${nn}* 

\`『   ²  』\`   
* *${nnn}* 

\`『    』\`   
* *${nna}* 

\`『   』\`   
* *${fb}* 

\`『   』\`   
* *https://t.me/+EcdN9fktnQQwY2Ex* 

\`『   』\`   
* *${tiktok}* 

\`『   』\`   
* *${yt}* 

\`『   』\`   
* *${face}* 

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`『  』\`   
• 

${wm}`
await conn.sendFile(m.chat, media, 'loli.mp4', str, fkontak)}
handler.command = /^cuentasoficiales|cuentas|cuentaofc$/i
handler.register = true
export default handler
