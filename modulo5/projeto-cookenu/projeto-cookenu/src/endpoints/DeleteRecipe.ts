import { Request, Response } from 'express'
import { RecipeDataBase } from '../data/RecipeDataBase'
import Authenticator from '../services/Authenticator'
import { UserDataBase } from '../data/UserDataBase'

export default async function deleteRecipe(req: Request, res: Response): Promise<void> {
    try {
        const recipeId = req.params.id
        const token = new Authenticator().getData(req.headers.authorization as string);

        const userData = await new UserDataBase().getUserById(token.id)
        if (!userData) {
            throw new Error("Make sure you are logged in!")
        }
        // verificando se existe um token. Se não existe, retorna um erro para o usuário,
        // porque é preciso estar logado para deletar uma receita.

        if (!recipeId) {
            throw new Error("Enter the id of the recipe you are looking for!")
        }
        // verificando se foi passado um id por path params. É preciso passar por ID a receita que deseja deletar.

        const recipeDataBase = new RecipeDataBase()
        const recipeData = await new RecipeDataBase().getRecipeById(recipeId)
        
        if (recipeData.creator_user_id !== userData.id) {
            throw new Error("You can only delete your own recipes!")
        }
        // verificando se o id do criador da receita é o mesmo id que está sendo passado junto com o token,
        // porque somente o criador da receita pode deletá-lo. 

        await recipeDataBase.deleteRecipeById(recipeId)
        // criando uma nova instância e acessando o método deleteRecipeById. 

        res.status(200).send({
            message: "Recipe deleted successfully!"
        })
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}