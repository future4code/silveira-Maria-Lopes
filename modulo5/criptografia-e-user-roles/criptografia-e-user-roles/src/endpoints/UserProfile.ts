import { Request, Response } from "express";
import connection from "../data/connection"
import Authenticator from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { getUserById } from "../data/getUserById";


export default async function userProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token);


        if (authenticationData.role !== "NORMAL") {
            throw new Error("Only a normal user can access this funcionality");
        }

        const user = await getUserById(authenticationData.id);

        res.status(200).send({
            id: user.id,
            email: user.email,
            role: authenticationData.role,
        });

    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}