import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import connection from "../data/connection";
import { authenticationData, recipe } from "../types";
import { HashManager } from "../services/HashManager";


export default async function registerRecipe(req: Request, res: Response): Promise<void> {
    try {
        const tokenHeaders = req.headers.authorization as string;

        const { title, description } = req.body

        if (!title || !description) {
            throw new Error("Credentials not provided!");
        }

        const userData = {
            title, description
        }

        const id = generateId()

        const newRecipe: recipe = {
            id,
            title,
            description,
            createdAt: Date.now().toString()
        }
        await connection("recipes").insert(newRecipe)

        const payload: authenticationData = {
            id
        };

        const newAuthenticator = new Authenticator();
        const token = newAuthenticator.generateToken(payload);

        res.status(201).send({ message: "Recipe created successfully!", token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}
