import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { getUser } from "../data/getUser";


export default async function login(req: Request, res: Response): Promise<void> {
    try {
        const { email, password } = req.body;

        // Item b. Validação do email
        if (!email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if (!password) {
            throw new Error("Please, check the fiels!");
        }

        const userData = {
            email,
            password
        };

        const user = await getUser(userData.email);

        const hashManager: HashManager = new HashManager()

        const compareResult = hashManager.compareHash(
            userData.password,
            user.password
        );

        if (!user || !compareResult) {
            throw new Error("Invalid credentials!");
        }

        const authenticatorNew = new Authenticator()
        const token = authenticatorNew.generateToken({
            id: user.id
        })

        res.status(200).send({ token });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};