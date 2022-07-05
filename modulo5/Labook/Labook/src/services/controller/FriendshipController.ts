import { Request, Response } from 'express'
import { PostBusiness } from '../../business/PostBusiness';
import { FriendshipConnectionDataBase } from '../data/FriendshipConnectionDataBase';
import { PostDataBase } from '../data/PostDataBase';
import { UserDataBase } from '../data/UserDataBase';
import Authenticator from '../authenticator';



export class FriendshipController {
    async createFriendship(req: Request, res: Response) {
        try {
            const { userToBecomeFriendId } = req.body

            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserDataBase().getUserById(token.id)
            // para registrar a amizade, eu preciso passar o id do que está pedindo pra fazer amizade. 

            if (!data) {
                throw new Error("Make sure you are logged in before add someone!")
            }

            const follower = await new UserDataBase().getUserById(data.id)
            const followed = await new UserDataBase().getUserById(userToBecomeFriendId)
            // acessando no banco de dados a função de pegar usuário por ID. 
            // dessa forma, acesso o ID do usuário que seguirá(por token), e o ID do usuário que será seguido(será passado por body).
            // verificando se existe os ids no banco de dados

            if (!follower || !followed) {
                throw new Error('User not found!')
            }

            await new FriendshipConnectionDataBase().friendship(followed.id, follower.id)
            res.status(201).send({ message: "Now you two are friends!" })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async unfriend(req: Request, res: Response) {
        try {
            const { userToUnfriendId } = req.body

            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserDataBase().getUserById(token.id)
            // para desfazer amizade, eu preciso passar o id do que está pedindo pra desfazer amizade. 

            if (!data) {
                throw new Error("Make sure you are logged in before add someone!")
            }

            const follower = await new UserDataBase().getUserById(data.id)
            const followed = await new UserDataBase().getUserById(userToUnfriendId)

            if (!follower || !followed) {
                throw new Error('User not found!')
            }

            await new FriendshipConnectionDataBase().unfriendUser(follower.id, followed.id)
            res.status(201).send({ message: "Now you two are no longer friends!" })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


}