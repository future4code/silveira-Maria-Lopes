import { Request, Response } from 'express';
import Authenticator from '../services/authenticator';
import { LikeBusiness } from '../business/LikeBusiness';


export class LikeController {

    async likePost(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            // token para logar.
            const { postId } = req.body
            // informando no body da requisição o post para curtir.
            if (postId === undefined || postId === "") {
                throw new Error("Inform post to like!")
            }
            // é preciso passar um post para curtir.
            if (token === undefined || token === "") {
                throw new Error("Make sure you are logged in before search feed!")
            }
            // é preciso estar logado para essa funcionalidade.
            const user_id = new Authenticator().getData(token).id
            // acessando o getData(para verificar o token).
            const verifyLike = await new LikeBusiness().verifyLike(user_id, postId)
            console.log(verifyLike)
            // verificando o like.
            if (verifyLike.length > 0) {
                throw new Error("You can't like this post again!")
            }
            // não é possível curtir o mesmo post mais de uma vez.
            await new LikeBusiness().likePost(user_id, postId)
            // acessando o método likePost que está dentro da classe LikeBusiness,
            // e passando por parâmetro o id da pessoa que está logada(e irá curtir),
            // e o postId, que está sendo passado pelo body.
            res.status(200).send({
                message: "Post successfully liked!"
            })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async unlikePost(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            // token para logar.
            const { postId } = req.body
            // informando no body da requisição o post para deixar de curtir.
            if (postId === undefined || postId === "") {
                throw new Error("Inform post to deslike!")
            }
            // é preciso passar um post para descurtir.
            if (token === undefined || token === "") {
                throw new Error("Make sure you are logged in before search feed!")
            }
            // é preciso estar logado para essa funcionalidade.
            const userId = new Authenticator().getData(token).id
            // acessando o getData(para verificar o token).
            const verifyLike = await new LikeBusiness().verifyLike(userId, postId)
            // verificando o like. 
            if (verifyLike.length === 0) {
                throw new Error("You can't unlike a post you didn't like!")
            }
            // se o like for igual a 0, não há como descurtir.
            await new LikeBusiness().unlikePost(userId, postId)
            // acessando o método unlikePost que está dentro da classe LikeBusiness,
            // e passando por parâmetro o id da pessoa que está logada(e deixando de curtir),
            // e o postId, que está sendo passado pelo body.
            res.status(200).send({
                message: "Post successfully unliked!"
            })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }
}