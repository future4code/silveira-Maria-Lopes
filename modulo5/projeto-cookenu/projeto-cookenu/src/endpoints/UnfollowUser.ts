import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { UserConnectionDataBase } from "../data/UserConnectionDataBase";

export default async function unfollowUser(req: Request, res: Response): Promise<void> {
    try {
        const { userToUnfollowId } = req.body
        const tokenFollower = req.headers.authorization as string

        // o token do usuário que seguirá outro usuário será recebido por headers authorization.
        // o id do usuário que será seguido será passado por body.

        if (!userToUnfollowId) {
            throw new Error('Please, enter the user ID you want to follow!')
        }

        const data = new Authenticator().getData(tokenFollower)
        // pegando o token do usuário que deixará de ser seguido outro usuário.

        const follower = await new UserDataBase().getUserById(data.id)
        const followed = await new UserDataBase().getUserById(userToUnfollowId)
        // acessando no banco de dados a função de pegar usuário por ID. 
        // dessa forma, acesso o ID do usuário que deixará de seguir(por token), e o ID do usuário que deixará de ser seguido(será passado por body).

        if (!follower || !followed) {
            throw new Error('User not found!')
        }

        await new UserConnectionDataBase().unfollowUser(followed.id, followed.id)
        // fazendo a conexão com o banco de dados, com a tabela intermediária, passando a função 'unfollow user'.

        res.status(201).send({ message: "Unfollowed successfully" })
    } catch (error: any) {
        console.log(error)
        res.status(400).send({
            message: error.message,
        });
    }
}