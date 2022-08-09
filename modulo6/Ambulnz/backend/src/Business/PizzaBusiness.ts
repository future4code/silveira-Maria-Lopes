import { Pizza, Ingredients } from './../Model/Pizza';
import { PizzaDataBase } from '../Data/PizzaDataBase';
import { generateId } from '../Services/IdGenerator';
import { inputPizza } from './../../Types/PizzaTypes';



export class PizzaBusiness {

    async createPizza(pizza: inputPizza) {
        try {
            const { name, price, photo, ingredients } = pizza

            if (!name || !price) {
                throw new Error("Please, fill all the fiels!")
            }

            const id = generateId()

            const newPizza = new Pizza(
                id,
                name,
                price,
                photo,
                ingredients
            )

            const newPostBase = await new PizzaDataBase().createPizza(newPizza)
            return newPostBase

        } catch (error: any) {
            throw new Error(error.message || "Error creating post. Please check your system administrator.");
        }
    }


    async getAllPizzas() {
        try {
            return await new PizzaDataBase().getAllPizzas()
        } catch (error: any) {
            throw new Error(error.message || "Error creating post. Please check your system administrator.");
        }
    }

}