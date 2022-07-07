import { Request, Response } from 'express'
import { FriendshipBusiness } from '../business/FriendshipBusiness';
import { PostBusiness } from '../business/PostBusiness';
import { FriendshipConnectionDataBase } from '../data/FriendshipConnectionDataBase';
import { PostDataBase } from '../data/PostDataBase';
import { UserDataBase } from '../data/UserDataBase';
import Authenticator from '../services/authenticator';



export class FriendshipController {
    async createFriendship(req: Request, res: Response) {
        try {
            const { userToBecomeFriendId } = req.body

            const token = req.headers.authorization as string
            // token para logar.
            if (!token) {
                throw new Error("Make sure you are logged in before add someone!")
            }
            const data = new Authenticator().getData(token)
            // verificando o token que foi passado na requisição.
            // não é possível desfazer uma amizade sem estar logado.
            const verifyFriendship = await new FriendshipBusiness().verifyFriendship(data.id, userToBecomeFriendId)
            // verificando o like.
            if (verifyFriendship.length === 1) {
                throw new Error("You too are friends already!")
            }
            // não é possível fazer amizade com o mesmo usuário mais de uma vez.
            const follower = await new UserDataBase().getUserById(data.id)
            const followed = await new UserDataBase().getUserById(userToBecomeFriendId)
            // acessando no banco de dados a função de pegar usuário por ID. 
            // dessa forma, acesso o ID do usuário que seguirá(por token), e o ID do usuário que será seguido(será passado por body).
            // verificando se existe os ids no banco de dados
            if (!follower) {
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
            // id do usuário que irá desfazer a amizade por body na requisição.
            const token = req.headers.authorization as string
            // token para logar.
            if (!token) {
                throw new Error("Make sure you are logged in before add someone!")
            }
            // não é possível desfazer uma amizade sem estar logado.

            const data = new Authenticator().getData(token)
            // para desfazer amizade, eu preciso passar o id do que está pedindo pra desfazer amizade. 

            const verifyFriendship = await new FriendshipBusiness().verifyFriendship(data.id, userToUnfriendId)
            // verificando o like.
            if (verifyFriendship.length !== 1) {
                throw new Error("You too aren't friends already!")
            }
            // não é possível fazer amizade com o mesmo usuário mais de uma vez.

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