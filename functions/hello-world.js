const nodemailer = require("nodemailer")

const transport = {
    host: 'smtp.outlook.com', // Don’t forget to replace with the SMTP host of your provider
    port: 587,
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
  }
}

const transporter = nodemailer.createTransport(transport)

exports.handler = async function(e) {
    if (e.httpMethod !== "POST") {
        return { statusCode: 405, body: "Método não permitido!" }
      }

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

    transporter.sendMail(mail, function(error, info){
        if(error){
          const response = {
            statusCode: 500,
            body: JSON.stringify({
              error: error.message,
            }),
          };
          callback(null, response);
        }
        const response = {
          statusCode: 200,
          body: JSON.stringify({
            message: `Email processed succesfully!`
          }),
        };
        callback(null, response);
      });
  }