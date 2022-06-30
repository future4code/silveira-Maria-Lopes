import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";
import { UserConnectionDataBase } from "../data/UserConnectionDataBase";

export default async function followUser(req: Request, res: Response): Promise<void> {
    try {
        const { userToFollowId } = req.body

        const tokenFollower = req.headers.authorization as string
        // const userToFollowId = req.body.id
        // o token do usuário que seguirá outro usuário será recebido por headers authorization.
        // o id do usuário que será seguido será passado por body.

        if (!userToFollowId) {
            throw new Error('Please, enter the user ID you want to follow!')
        }

        const data = new Authenticator().getData(tokenFollower)
        // pegando o token do usuário que seguirá outro usuário.

        const follower = await new UserDataBase().getUserById(data.id)
        const followed = await new UserDataBase().getUserById(userToFollowId)
        // acessando no banco de dados a função de pegar usuário por ID. 
        // dessa forma, acesso o ID do usuário que seguirá(por token), e o ID do usuário que será seguido(será passado por body).
        // verificando se existe os ids no banco de dados. 

        if (!follower || !followed) {
            throw new Error('User not found!')
        }

        await new UserConnectionDataBase().followUser(followed.id, follower.id)
        // fazendo a conexão com o banco de dados que relaciona os usuários, passando a função 'follow user' e passando 
        // o id dos 2 usuários que serão relacionados um com o outro: o id do seguidor, e o id do seguido.

        res.status(201).send({ message: "Followed successfully" })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}