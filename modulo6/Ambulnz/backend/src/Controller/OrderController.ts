import { UserDataBase } from "../Data/UserDataBase";
import { Order } from "../../Types/OrderTypes"
import { pizzaIngredientsConnectionDataBase } from "../Data/OrderDataBase"
import { Request, Response } from "express"
import Authenticator from "../Services/Authenticator";
import { generateId } from "../Services/IdGenerator";




export class OrderController {

    async orderReq(req: Request, res: Response): Promise<void> {
        try {
            const { quantity, user_id, pizza_id } = req.body

            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserDataBase().getUserById(token.id)
            // para registrar o pedido, eu preciso passar o id do usuário que está logado.

            if (!data) {
                throw new Error("Make sure you are logged in before post something!")
            }

            const newOrder: Order = {
                id: generateId(),
                quantity,
                user_id,
                pizza_id
            }

            await new pizzaIngredientsConnectionDataBase().order(newOrder.id, newOrder.quantity, newOrder.user_id, newOrder.pizza_id)

            res.status(201).send("Order placed successfully!")
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    async getOrders(req: Request, res: Response) {
        try {
            const token = req.headers.authorization as string
            // token para logar.
            if (!token) {
                throw new Error("Make sure you are logged in before search feed!")
            }
            // é necessário estar logado para acessar o feed de posts.
            const data = new Authenticator().getData(token);
            // conferindo o token.
            const user = await new UserDataBase().getUserById(data.id)
            // criando uma instância de UserDataBase e acessando o método getUserById.
            if (!user) {
                throw new Error("Make sure you are logged in before search feed!")
            }

            const order = await new pizzaIngredientsConnectionDataBase().getOrders(user.id)
            res.status(200).send({
                orders: order
            })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

    async getOrderById(req: Request, res: Response) {
        try {
            const id = req.params.id

            const token = req.headers.authorization as string
            // token para logar.
            if (!token) {
                throw new Error("Make sure you are logged in before search feed!")
            }
            // é necessário passar o token para acessar o feed.
            const data = new Authenticator().getData(token)
            // conferindo o token.

            const order = await new pizzaIngredientsConnectionDataBase().getOrdersById(id)
            res.status(200).send({ order })
        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }

}