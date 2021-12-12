const Discord = require("discord.js");
const Gamedig = require("gamedig");
exports.run = (client, message, args) => {

  
  Gamedig.query({
    type: "mtasa", // < Burası böyle kalacak.
    host: ""  // << Bu kısıma sunucunuzun IP'ını girin.
  })
    .then(state => {
      const CodAre = new Discord.MessageEmbed()
        .setColor("0xff0000") // < Embed kısmının rengini değiştirmeye yarıyor.
        .setTitle("Oyuncu Sayıları") // < Oyuncu sayılarını değiştirebilirsiniz örneğin: / Aktif Oyuncu Sayıları.
        .setDescription("") // < Buraya açıklama olarak şunu ekleyebilirsiniz örneğin: / Şentürk Roleplay'ın Aktif Oyuncu Sayısı

        .addField("Şentürk Roleplay","Aktif Oyuncu : " + state.raw.numplayers + "\n" + "IP : ")// Sunucunuzun IP'ını girin!
      
      	.setTimestamp()
	      .setFooter("Toplam " + state.raw.numplayers +  " oyuncu aktif" , "https://media.discordapp.net/attachments/875760260802031698/919536694104031322/IMG_1816.png");

      message.channel.send(CodAre);
    })
  
 
  
.catch(err =>
  
       
      console.log(err)
    );
  
};
exports.config = {
  name: "sunucu", // < sunucu yazan kısım komut'dur onu değiştirebilirsiniz örneğin: /  ip yazabilirsiniz.
  aliases:[]
};


//-- Daha fazla bot alt yapıları için discord sunucumuz: https://discord.gg/dMFjAy4fSX
//-- Github link: https://github.com/redliners373 
//-- eMail: edizmedia34@gmail.com
//-- aka Ediz Öztürk 

                        // -- Code Development RedSton © - Viscreal Community - EdizMedya //