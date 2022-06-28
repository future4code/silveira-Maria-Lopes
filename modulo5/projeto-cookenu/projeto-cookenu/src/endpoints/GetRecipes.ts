import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { getRecipeById } from "../data/getRecipeById";

export default async function getRecipe(req: Request, res: Response): Promise<void> {
    try {
        const id = req.params.id
        const token = req.headers.authorization as string;
        
        const authenticator = new Authenticator()
        const authenticationData = authenticator.getData(token);

        const [recipe] = await getRecipeById(authenticationData.id);
        
        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            createdAt: recipe.createdAt
        });


    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}