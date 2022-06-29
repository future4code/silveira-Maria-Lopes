import { Request, Response } from "express";
import { UserDataBase } from "../data/UserDataBase";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;

        // validação do email.
        if (!email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }
        // validação do password.
        if (!password) {
            throw new Error("Please, check the fiels!");
        }
        // definindo os campos que serão enviados no body da requisição.
        const userData = {
            email,
            password
        };

        const user = await new UserDataBase().getUserByEmail(userData.email);
        // criando uma instância de userDataBase para acessar o método getUserByEmail.
        
        const hashManager: HashManager = new HashManager()

        const compareResult = hashManager.compareHash(
            userData.password,
            user?.password
        );
        // comparando a senha do meu banco de dados com a senha que foi enviada no body da requisição pelo usuário.

        if (!user || !compareResult) {
            throw new Error("Invalid credentials!");
        }
        // validação da comparação das senhas: a do banco de dados com a que foi enviada no body da requisição pelo usuário.

        const newAuthenticator = new Authenticator()
        const token = newAuthenticator.generateToken({
            id: user.id,
            role: user.role
        })
        // criando uma nova instância do meu authenticator, onde gero novo token.
   
        res.status(200).send({ token });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};