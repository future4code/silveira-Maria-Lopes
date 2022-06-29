import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { generateId } from "../services/IdGenerator";
import { recipe } from "../types";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";
import moment from "moment";

export default async function registerRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = new Authenticator().getData( req.headers.authorization as string);
        // token será passado por headers authorization.

        const data = await new UserDataBase().getUserById(token.id)
        // para registrar a receita, eu preciso passar o id do criador da receita. 

        if (!data) {
            throw new Error("Make sure you are logged in before registering recipes!")
        }
        const { title, description } = req.body
        // desestruturação.

        const newRecipe: recipe = {
            id: generateId(),
            title,
            description,
            created_at: new Date(),
            creator_user_id: token.id
        }
        // campos necessários para a criação de uma nova receita.ipe)
        if (!title || !description) {
            throw new Error("Credentials not provided!");
        }
        // verificando se os campos foram preenchidos corretamente no body da requisição.

        await new RecipeDataBase().createRecipe(newRecipe)
        // inserindo minha nova receita no banco de dados.
        res.status(201).send({ message: "Recipe created successfully!", token })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}
