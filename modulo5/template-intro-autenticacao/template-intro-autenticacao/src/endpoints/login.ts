import { Request, Response } from "express";
import connection from "../connection";
import { authenticationData } from "../types";
import { getUserByEmail } from "../data/GetUserByEmail";
import Authenticator from "../services/Authenticator";


export default async function login(req: Request, res: Response): Promise<void> {
    try {
        // Item b. Validação do email
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const userData = {
            email: req.body.email,
            password: req.body.password,
        };

        const user = await getUserByEmail(userData.email);

        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        }

        const authenticator = new Authenticator()

        const payload: authenticationData = {
            id: user.id
        }

        const token = authenticator.generateToken(payload)

        res.status(200).send({
            token,
        });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};