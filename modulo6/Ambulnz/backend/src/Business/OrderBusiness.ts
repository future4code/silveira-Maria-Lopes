import { pizzaIngredientsConnectionDataBase } from './../Data/OrderDataBase';
import { Pizza, Ingredients } from './../Model/Pizza';
import { PizzaDataBase } from '../Data/PizzaDataBase';
import { generateId } from '../Services/IdGenerator';
import { inputPizza } from './../../Types/PizzaTypes';
// import { Order } from '../Model/Order';
import { Order } from '../../Types/OrderTypes';
import { UserDataBase } from '../Data/UserDataBase';
import Authenticator from '../Services/Authenticator';



export class OrderBusiness {

    async makeOrder(quantity: number, token: string, pizza_id: string) {
        try {
           
            if (!quantity) {
                throw new Error("Please, fill all the fiels!")
            }

            const tokenData = new Authenticator().getData(token)

            const data = await new UserDataBase().getUserById(tokenData.id)
            // para registrar o pedido, eu preciso passar o id do usuário que está logado.

            if (!data) {
                throw new Error("Make sure you are logged in before order something!")
            }

            const id = generateId()

            const newPostBase = await new pizzaIngredientsConnectionDataBase().order(id, quantity, tokenData.id, pizza_id )
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