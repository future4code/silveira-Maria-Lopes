import { BaseDatabase } from "./BaseDataBase";

export class pizzaIngredientsConnectionDataBase extends BaseDatabase {
    private static TABLE_NAME = "makepizzaorder"

    async order(id: string, quantity: number, user_id: string, pizza_id: string) {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    quantity,
                    user_id,
                    pizza_id
                })
                .into(pizzaIngredientsConnectionDataBase.TABLE_NAME)
        } catch (error: any) {
            console.log(error)
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getOrders(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from('makepizzaorder')
        return result
    }

    public async getOrdersById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from('makepizzaorder')
            .where({ id })
        return result[0]
    }
}