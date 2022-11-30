import { Request, Response } from "express";
import Authenticator from "../services/Authenticator";
import { RecipeDataBase } from "../data/RecipeDataBase";
import { UserDataBase } from "../data/UserDataBase";
import moment from "moment";


export default async function getRecipe(req: Request, res: Response): Promise<void> {
    try {
        const recipeId = req.params.id
        const token = new Authenticator().getData(req.headers.authorization as string);
        // passando por ID o id da receita para acessá-lo.
        // criando uma nova instância de Authenticator para acessar o método getData que está dentro dele.

        const user = await new UserDataBase().getUserById(token.id)
        // acessando o usuário que criou a receita pelo token, headers authorization.
        if (!user) {
            throw new Error("Make sure you are logged in before search recipes!")
        }
        // verificando se o token está correto.
        if (!recipeId) {
            throw new Error("Please, enter the id of the recipe you want to search!")
        }
        // verificando se o ID da receita foi preenchido por path params.
        const recipe = await new RecipeDataBase().getRecipeById(recipeId)
        // acessando a receita por ID.
        res.status(200).send({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            created_at: moment.unix(recipe.created_at / 1000).format("DD/MM/YYYY")
        });
        // formato da saída da requisição.
        // no created_at usei a biblioteca moment do javascript. 
        // Para criar um momento a partir de um timestamp Unix (segundos desde o Unix Epoch), usei o moment.unix(Number).
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}