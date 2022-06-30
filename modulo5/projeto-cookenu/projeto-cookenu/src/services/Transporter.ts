import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const transporter = nodemailer.createTransport({
    host: process.env.HOST_MAIL,
    port: process.env.HOST_PORT,
    auth: {
        user: process.env.HOST_USER,
        pass: process.env.HOST_PASS
    }
})

const sender = {
    name: 'Usuario Sender',
    mail: 'sender@teste.com'
}

const receiver = {
    email: 'bar@example.com'
}

const mailContent = {
    subject: 'Hello email!',
    text: 'This is my first email!', // a parte de texto é para emails que não aceitam html.
    html: '<strong>This is my first email!</strong>'
}

async function sendMail(transporter: any, sender: any, receiver: any, mailContent: any) {

    const mail = await transporter.sendMail({
        from: `"${sender.name}" ${sender.mail}`,
        to: `${receiver.email}`, // pode ser lista de recebimento
        subject: `${mailContent.subject}`,
        text: `${mailContent.text}`,
        html: `${mailContent.html}` // a versão do mail content em HTML.
    })

    console.log('Email enviado:', mail.messageId )
    console.log('URL do Ethereal:', nodemailer.getTestMessageUrl(mail))
}

async function mail() {
    try {
        await sendMail(transporter,sender, receiver,mailContent);
    } catch (error) {
        console.log(error)
    }
}
mail();
