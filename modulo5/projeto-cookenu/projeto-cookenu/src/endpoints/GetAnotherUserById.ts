import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import Authenticator from "../services/Authenticator";


export default async function getUserProfile(req: Request, res: Response): Promise<void> {
    try {
        const idParams = req.params.id
        const token = new Authenticator().getData(req.headers.authorization as string);

        if (!token) {
            throw new Error('You are not logged in. Be sure to login before users!')
        }
        // verificando se o token foi passado corretamente por headers Authorization.
        const user = await new UserDataBase().getUserById(token.id);

        if (!idParams) {
            throw new Error('Please, check ID!')
        }
        // verificando se o ID foi passado por path params.

        const data = await new UserDataBase().getUserById(idParams)
        // conectando com o método dentro de UserDataBase, que busca um usuário por ID.

        res.status(200).send({
            id: data.id,
            name: data.name,
            email: data.email,
            role: data.role
        });
        // enviando o formato e as informações que serão a saída da requisição.
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}
