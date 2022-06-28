import { Request, Response } from "express";
import connection from "../data/connection"
import { authenticationData } from "../types";
import { getUserByEmail } from "../data/GetUserByEmail";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";


export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body;

        // Item b. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        };

        const user = await getUserByEmail(userData.email);

        const hashManager: HashManager = new HashManager()

        const compareResult = hashManager.compareHash(
            userData.password,
            user.password
        );

        if (!user || !compareResult) {
            throw new Error("Credenciais inválidas!");
        }

        const authenticatorNew = new Authenticator()
        const token = authenticatorNew.generateToken({
            id: user.id,
            role: user.role
        })

        res.status(200).send({ token });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};