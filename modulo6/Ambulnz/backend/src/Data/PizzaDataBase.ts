import { Pizza } from "../Model/Pizza";
import { BaseDatabase } from "./BaseDataBase";
import { generateId } from "../Services/IdGenerator";


export class PizzaDataBase extends BaseDatabase {

    // dentro do parâmetro tá o model ( Pizza )
    public async createPizza(pizza: Pizza) {
        try {
            // const id = generateId()
            const ingredients = pizza.getIngredients()


            // const ingredientId = (): string => {
            //     return id
            // }

            await BaseDatabase.connection('pizza')
                .insert({
                    id: pizza.getId(),
                    name: pizza.getName(),
                    price: pizza.getPrice()
                })

            for (let ingredient of ingredients) {
                const id = generateId()

                await BaseDatabase.connection('ingredients')
                    .insert({
                        id: id,
                        name: ingredient.name
                    })

                await PizzaDataBase.connection('pizza_connection_ingredients')
                    .insert({
                        ingredients_id: id,
                        pizza_id: pizza.getId()
                    })
            }

        } catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }


    public async getAllPizzas(): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from('pizza')
        return result
    }


}

