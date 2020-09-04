exports.handler = async function(e, context, callback) {
  const nodemailer = require("nodemailer")

  if (e.httpMethod !== "POST") {
      return { statusCode: 405, body: "Método não permitido!" }
    }

  const transport = {
      host: 'smtp.outlook.com', // Don’t forget to replace with the SMTP host of your provider
      port: 587,
      auth: {
          user: 'italocod@hotmail.com',
          pass: '1000097517e80'
    }
  }
  
  const transporter = nodemailer.createTransport(transport)
    

  const params = JSON.parse(e.body);

  const nome = params.Nome
  const email = params.email
  const telefone = params.telefone
  const message = params.message === 'undefined' ? 'VAZIO' : params.message
  const produtos = params.Produtos

  const content = `Nome do Cliente: ${nome}
              \nEmail: ${email}
              \nTelefone: ${telefone}
              \nMensagem: ${message}
              \nProdutos: ${produtos} 
              `
  const mail = {
      from: nome,
      to: 'italocod@hotmail.com',  // Change to email address that you want to receive messages on
      subject: `Mensagem de Pedido do Cliente: ${nome}`,
      text: content
  }

  transporter.sendMail(mail)
  .then(() => {
    callback(null, { statusCode: 200, body: 'Success' });
  })
  .catch(e => callback(e, { statusCode: 500, body: 'Error sending email' }));

  }