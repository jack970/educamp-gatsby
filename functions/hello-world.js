const nodemailer = require("nodemailer")

exports.handler = async function(e, context, callback) {

  if (e.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método não permitido!" }
    }

  const transport = {
      host: 'smtp-mail.outlook.com', // Don’t forget to replace with the SMTP host of your provider
      port: 587,
      auth: {
          user: 'work_teste7@outlook.com',
          pass: 'senha123'
    }
  }
  
  const transporter = nodemailer.createTransport(transport)
    

  const params = JSON.parse(e.body);

  const nome = params.nome
  const email = params.email
  const telefone = params.telefone
  const message = params.mensagem
  const produtos = params.Produtos
  
  const content = `Nome do Cliente: ${nome}
              \nEmail: ${email}
              \nTelefone: ${telefone}
              \nMensagem: ${message}
              \n${produtos && produtos.map(produto => `Produto: ${produto.nome} | Quantidade: ${produto.quantidade}\n`).join('')}
              `
  console.log(content)
  const mail = {
      from: nome,
      to: 'italocod@hotmail.com',  // Change to email address that you want to receive messages on
      subject: `Mensagem de Pedido do Cliente: ${nome}`,
      text: content
  }

  return transporter.sendMail(mail)
  .then(() => {
    callback(null, { statusCode: 200, body: "Success" });
  })
<<<<<<< HEAD
  .catch(e => callback(e, { statusCode: 500, body: "Error sending email" }))
=======
  .catch(e => callback(e, { statusCode: 500, body: 'Error sending email' }));

>>>>>>> fcc7336d9fd2a69c8dbe56f3e8890f7dd5f5e426
}
