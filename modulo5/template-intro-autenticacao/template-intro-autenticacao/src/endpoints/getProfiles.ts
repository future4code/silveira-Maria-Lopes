import { Request, Response } from "express";
import { authenticationData } from "../types";
import Authenticator from "../services/Authenticator";
import { getUserById } from "../data/getProfiles";


export default async function getProfile(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization as string;

        const authenticator = new Authenticator()

        const authenticationData = authenticator.getTokenData(token);
        console.log(authenticationData)

        const user = await getUserById(authenticationData.id);

        res.status(200).send({ id: user.id, email: user.email });
    } catch (err: any) {
        res.status(400).send({
            message: err.message,
        });
    }
};