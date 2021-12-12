const Discord = require("discord.js")     
const client = new Discord.Client();       
const config = require("./config.js")    
const fs = require("fs");                
require('./util/Loader.js')(client);     
client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection();  
fs.readdir('./commands/', (err, files) => { 
  if (err) console.error(err);               
  console.log(`${files.length} komut yüklenecek.`); 
  files.forEach(f => {                       
    let props = require(`./commands/${f}`);   
    console.log(`${props.config.name} komutu yüklendi.`);  
    client.commands.set(props.config.name, props); 
    props.config.aliases.forEach(alias => {         
      client.aliases.set(alias, props.config.name); 
  
    });
  });
})
client.on("ready", () => {
  const embed = new Discord.MessageEmbed()
  .setColor('#0099ff') //-- < Bot aktif edildiğinde gönderelecek renkli embed mesajı.
    .setTitle('') //-- < İstediğiniz metin'i yazabilirsiniz, başlattığınızda kalın kelimelerle yazı cıkacak.
    .setAuthor('RedSton', "https://media.discordapp.net/attachments/875760260802031698/919536694104031322/IMG_1816.png") //-- < Sunucunuza ait bir logo var ise buraya yapıştırın.
    .setDescription('Bot başarıyla yönetim tarafından aktif edildi.')
    .setThumbnail()
    .setImage('https://media.discordapp.net/attachments/875760260802031698/919536694104031322/IMG_1816.png') //-- < Sunucunuza ait bir logo var ise buraya yapıştırın.
    .setTimestamp()
    .setFooter('Başarıyla bot yönetim tarafından aktif edildi.');
  client.channels.cache.get("").send(embed) //-- < Glitch'den veya VDS'den aktif edeceğiniz zaman buraya botu çalıştırdığınızda 26. satırdaki mesajı gönderecek kanalın ID'sını yapıştırın.
});

client.login("") // < Botun tokenini buraya girmelisiniz.


//-- Daha fazla bot alt yapıları için discord sunucumuz: https://discord.gg/dMFjAy4fSX
//-- Github link: https://github.com/redliners373 
//-- eMail: edizmedia34@gmail.com
//-- aka Ediz Öztürk 

                        // -- Code Development RedSton © - Viscreal Community - EdizMedya //