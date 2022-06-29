import { Request, Response } from 'express'
import { BaseDatabase } from '../data/BaseDataBase'
import { RecipeDataBase } from '../data/RecipeDataBase'
import Authenticator from '../services/Authenticator'
import { UserDataBase } from '../data/UserDataBase'


export default async function editRecipe(req: Request, res: Response): Promise<void> {
    try {
        const recipeId = req.params.id
        const token = new Authenticator().getData(req.headers.authorization as string);
        // token será passado por headers authorization.

        if (token.role !== 'NORMAL') {
            throw new Error("Only normal users can edit the recipe!")
        }
        // verificando o role do usuário. Nesse caso, somente usuários com role 'normal' podem editar receitas.

        const userData = await new UserDataBase().getUserById(token.id)
        // conexão com o banco de dados UserDataBase para acessar o método getUserById.
      
        if (!userData) {
            throw new Error("Make sure you are logged in before edit recipes!")
        }
        // verificando se o usuário está logado, pois é preciso estar para editar receitas.

        const recipes = {
            title: req.body.title,
            description: req.body.description
        }
        // campos que serão enviados no body da requisição.

        if (!recipeId) {
            throw new Error("Please, enter the id of the recipe you are looking for!")
        }
        // se não for passado o id da receita que será editada, retornará um erro para o usuário.

        if (!recipes.title || !recipes.description) {
            throw new Error("Please, fill in the required fields!")
        }
        // verificando se o usuário preencheu titulo e descrição da receita.

        const recipeData = await new RecipeDataBase().getRecipeById(recipeId)
        // acessando o banco de dados RecipesDataBase para acessar o método getRecipeById.
        console.log(recipeData)
        if (!recipeData.creator_user_id !== !userData.id) {
            throw new Error("You can only change your recipes!")
        }
        // verificando se o criador da receita é o mesmo que está tentando alterar a receita,
        // pois só o próprio criador pode alterá-la.

        const recipeDB = await new RecipeDataBase().update(recipeId, recipes.title, recipes.description)
       
            res.status(200).send({
                message: "Recipe updated successfully!", recipeDB
            })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}