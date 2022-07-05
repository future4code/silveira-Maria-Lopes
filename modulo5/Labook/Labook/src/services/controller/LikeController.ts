import { Request, Response } from 'express';
import Authenticator from '../authenticator';
import { LikeBusiness } from '../../business/LikeBusiness';


export class LikeController {

    async likePost(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            const { postId } = req.body

            if (postId === undefined || postId === "") {
                throw new Error("Inform post to like!")
            }

            if (token === undefined || token === "") {
                throw new Error("Make sure you are logged in before search feed!")
            }

            const data = new Authenticator().getData(token)

            const verifyLike = await new LikeBusiness().verifyLike(data.id, postId)

            if (verifyLike !== 0) {
                throw new Error("You can't like this post again!")
            }

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
            const { postId } = req.body

            if (postId === undefined || postId === "") {
                throw new Error("Inform post to deslike!")
            }

            if (token === undefined || token === "") {
                throw new Error("Make sure you are logged in before search feed!")
            }

            const data = new Authenticator().getData(token)

            const verifyLike = await new LikeBusiness().verifyLike(data.id, postId)

            if (verifyLike === 0) {
                throw new Error("You can't unlike a post you didn't like!")
            }

            await new LikeBusiness().unlikePost(data.id, postId)

            res.status(200).send({
                message: "Post successfully unliked!"
            })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


}