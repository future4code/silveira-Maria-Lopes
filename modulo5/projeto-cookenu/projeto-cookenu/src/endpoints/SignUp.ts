import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import connection from "../data/connection";
import { authenticationData } from "../types";
import { HashManager } from "../services/HashManager";
import { user } from "../types";

export default async function createUser(req: Request, res: Response): Promise<void> {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            throw new Error("Credentials not provided!");
         }

        const userData = {
            name, email, password
        }

        const id = generateId()

        const newHash: HashManager = new HashManager()
        const senhaCriptografada = newHash.createHash(userData.password)

        const newUser: user = {
            id,
            name,
            email: userData.email,
            password: senhaCriptografada
        }
        await connection("createUserCookenu").insert(newUser)

        const payload: authenticationData = {
            id
        };

        const newAuthenticator = new Authenticator();
        const token = newAuthenticator.generateToken(payload);

        res.status(201).send({ message: "User created successfully!", token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}
