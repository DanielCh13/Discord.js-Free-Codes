const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  // Primeiro é necessário que você calcule o tempo de resposta, criando uma váriavel.
  const m = message.channel.send("Calculando....");
  
  // Após isso iremos fazer uma váriavel que será editada adicionando as informações.
  let msg = "";
  
  // Para verificar a latência do bot basta você subtrair o delay de uma mensagem com o delay atual, assim ao editar ele ira verificar o mesmo.
  let latencia = Math.round(m.createdTimestamp - message.createdTimestamp);
  
  // Para verificar a latência da API basta você fazer um round do evento ping dispónibilizado pelo discord.
  let api = Math.round(client.ping);
  
  // Após todo este procedimento iremos fazer um delay para resposta do calculo.
  await setTimeout(function() {
    // Adicionando as informações...
    msg += `Minha latência é de ${latencia}ms.\n`;
    msg += `A latência de minha API é de ${api}ms.`;
    // E por fim editando a mensagem.
    m.edit(msg)
  // Aqui você pode está alterando o delay de edit da mensagem.
  }, 7000);
  
}
