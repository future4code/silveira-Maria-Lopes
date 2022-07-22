import { pizzaIngredientsConnectionDataBase } from './../Data/OrderDataBase';
import { Pizza, Ingredients } from './../Model/Pizza';
import { PizzaDataBase } from '../Data/PizzaDataBase';
import { generateId } from '../Services/IdGenerator';
import { inputPizza } from './../../Types/PizzaTypes';
// import { Order } from '../Model/Order';
import { Order } from '../../Types/OrderTypes';



export class OrderBusiness {

    async makeOrder(order: Order) {
        try {
            const { quantity, user_id, pizza_id } = order

            if (!quantity || !user_id || !pizza_id) {
                throw new Error("Please, fill all the fiels!")
            }

            const id = generateId()

            const newPostBase = await new pizzaIngredientsConnectionDataBase().order(id, quantity, user_id, pizza_id)
            return newPostBase

        } catch (error: any) {
            throw new Error(error.message || "Error creating post. Please check your system administrator.");
        }
    }


    async getOrders(id: string) {
        try {
            return await new pizzaIngredientsConnectionDataBase().getOrders(id)
        } catch (error: any) {
            throw new Error(error.message || "Error creating post. Please check your system administrator.");
        }
    }

    async getOrderById(id: string) {
        try {
            const order = await new pizzaIngredientsConnectionDataBase().getOrdersById(id)
            console.log(order)
            return order
 
        } catch (error) {

        }

    }


}