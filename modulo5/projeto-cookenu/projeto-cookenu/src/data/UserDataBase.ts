import { BaseDatabase } from "./BaseDataBase";
import { Request, Response } from "express";
import { user } from "../types";
import { RecipeDataBase } from "./RecipeDataBase";
import { UserConnectionDataBase } from "./UserConnectionDataBase";
import moment from "moment";


export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "User"

    public async createUser(user: user): Promise<void> {
        await BaseDatabase.connection()
            .insert(user)
            .into('User')
    }

    public async getUserByEmail(email: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ email })
        return result[0]
    }

    public async getProfile(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ id })
        return result[0]
    }

    public async getUserById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ id })
        return result[0]
    }

    public async getFeed(id: string) {
        const result = await BaseDatabase.connection()
            .select("*")
            .from("UserFollowConnection")
            .innerJoin("User", "User.id", "UserFollowConnection.followed_id")
            .innerJoin("Recipes", "Recipes.creator_user_id", "UserFollowConnection.follower_id")
            .where("UserFollowConnection.followed_id", `${id}`)

        const arrayRecipes = result.map((recipe: { created_at: number }) => {
            return {
                ...recipe,
                created_at: moment.unix(recipe.created_at / 1000).format("DD/MM/YYYY")
            }
        })
        return arrayRecipes
        // relacionando tabelas e retornando campos que são necessários para a minha aplicação.
        // um map do result, fazendo uma cópia das receitas e adicionando o campo de created_at já com a data formada
        // com a biblioteca moment.
    }

    public async deleteUser(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .delete()
            .from(UserDataBase.TABLE_NAME)
            .where('id', id)
        return result
    }
}
