import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import connection from "../data/connection";
import { authenticationData } from "../types";
import { HashManager } from "../services/HashManager";
import { getUserById } from "../data/getUserById";

export default async function getAnotherUserProfile(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        const token = req.headers.authorization as string;
        
        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token);

        const [user] = await getUserById(authenticationData.id);
        
        res.status(200).send({
            id: user.id,
            name: user.name,
            email: user.email
        });


    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}