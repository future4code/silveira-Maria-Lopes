import { Request, Response } from "express";
import { CommentBusiness } from "../business/CommentsBusiness";
import Authenticator from "../services/authenticator";


export class CommentController {
    async commentPost(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const { comment, post_id } = req.body

            if (token === undefined || token === "") {
                throw new Error("Make sure you are logged in before commenting on any post!")
            }

            if (comment === undefined || comment === "") {
                throw new Error("The comment can't be empty!")
            }

            const user = new Authenticator().getData(token)

            await new CommentBusiness().commentPost(comment, user.id, post_id)
            res.status(200).send({
                message: "Comment created successfully!"
            })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}