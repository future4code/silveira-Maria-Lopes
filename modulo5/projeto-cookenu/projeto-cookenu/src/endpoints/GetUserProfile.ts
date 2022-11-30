import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { UserDataBase } from "../data/UserDataBase";


export default async function getOwnProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = new Authenticator().getData(req.headers.authorization as string);
        // criando uma nova instância de Authenticator para acessar o método getData. 
        // receber token por headers Authorization.

        const userData = await new UserDataBase().getProfile(token.id)
        // criando uma nova instância de UserDataBase para acessar o método getProfile que está 
        // dentro da instância. 

        res.status(200).send({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            role: userData.role
        });
        // formato que sairá a resposta da requisição.
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}