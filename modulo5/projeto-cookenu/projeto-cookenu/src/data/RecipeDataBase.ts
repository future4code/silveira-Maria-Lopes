import { BaseDatabase } from "./BaseDataBase";
import { recipe } from "../types";

export class RecipeDataBase extends BaseDatabase {
    static TABLE_NAME = "Recipes"

    public async createRecipe(recipe: recipe): Promise<void> {
        await BaseDatabase.connection()
            .insert(recipe)
            .into(RecipeDataBase.TABLE_NAME)
    }

    public async getRecipeById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(RecipeDataBase.TABLE_NAME)
            .where({ id })
        return result[0]
    }

    public async deleteRecipeById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .delete()
            .from(RecipeDataBase.TABLE_NAME)
            .where('id', id)
        return result
    }

    public async update(id: string, title: string, description: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .update({
                title,
                description
            })
            .from(RecipeDataBase.TABLE_NAME)
            .where('id', id)
        return result
    }

    public async deleteRecipeCreator(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .delete()
            .from(RecipeDataBase.TABLE_NAME)
            .where('creator_user_id', id)
        return result
    }

}

