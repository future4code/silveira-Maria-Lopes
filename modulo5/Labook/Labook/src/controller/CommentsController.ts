import { Request, Response } from "express";
import { CommentBusiness } from "../business/CommentsBusiness";
import Authenticator from "../services/authenticator";


export class CommentController {
    async commentPost(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            // token para logar.
            const { comment, post_id } = req.body
            // campos que serão preenchidos no body da requisição.
            if (token === undefined || token === "") {
                throw new Error("Make sure you are logged in before commenting on any post!")
            }
            // não é possível passar um token inválido ou deixar de preencher o campo.
            if (comment === undefined || comment === "") {
                throw new Error("The comment can't be empty!")
            }
            // não é possível enviar um comentário vazio.
            const user = new Authenticator().getData(token)
            // verificando o token que foi passado na requisição.
            await new CommentBusiness().commentPost(comment, user.id, post_id)
            // inserindo no banco de dados o comentário, o user.id do usuário que comentou e o post que foi comentado.
            res.status(200).send({
                message: "Comment created successfully!"
            })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}