import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { user } from "../types";
import { UserDataBase } from "../data/UserDataBase";

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password, role } = req.body

        if (!name || !email || !password || !role) {
            throw new Error("Credentials not provided!");
        }
        // verificando se os campos estão vazios. Se estiverem, não será possível criar um novo usuário.

        const userData: user = {
            id: '',
            name,
            email,
            password,
            role: req.body.role || 'NORMAL'
        }
        // definindo os campos que serão enviados no body da requisição.

        userData.id = generateId()
        // gerando o id automático.

        userData.password = new HashManager().createHash(userData.password)
        // criando uma nova instância de HashManager para poder acessar o método createHash, e criptografar a senha.

        await new UserDataBase().createUser(userData)
        // inserindo o novo usuário no meu banco de dados.

        const token = new Authenticator().generateToken({
            id: userData.id,
            role: userData.role
        });
        // gerando um token para esse id, e verificando o tipo de role: normal ou admin.
        // o normal tem acesso à coisas que o admin não tem, e vice-versa.
        res.status(201).send({ message: "User created successfully!", token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}
