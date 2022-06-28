import { connection } from "./connection"

export const getRecipeById = async (id: string): Promise<any> => {

    const user = await connection("recipes")
        .select(`*`)
        .where({ id });

    return user
}