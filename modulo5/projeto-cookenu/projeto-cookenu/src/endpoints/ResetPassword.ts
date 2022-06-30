import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { UserConnectionDataBase } from "../data/UserConnectionDataBase";
import { transporter } from "../services/Transporter";


export default async function forgotPassword(req: Request, res: Response): Promise<any> {
    try {

        // await connection("User")
        //         .update({ password: newHash })
        //         .where({ email })

        // console.log({
        //     newPassword,
        //     oldHash: user.password,
        //     newHash: newHash
        // })

        // transporter
        const info = await transporter.sendMail({
            from: "***@gmail.com>",
            to: "exemplo@gmail.com",
            subject: "First message!",
            text: "This is my firts email",
            html: "<p>HTML<p>"
        })
        // Assim como as configurações de acesso, o e-mail também é feito utilizando um objeto,
        // que define as propriedades daquela mensagem específica. 

        // sobre o email:
        // from: Remetente;
        // to: Destinatário;
        // subject: Campo de assunto do email;
        // text: O texto que aparece na versão minificada do email;
        // html: O corpo do email.
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}