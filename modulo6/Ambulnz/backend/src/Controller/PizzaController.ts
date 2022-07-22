import { UserDataBase } from './../Data/UserDataBase';
import { PizzaBusiness } from './../Business/PizzaBusiness';
import { inputPizza } from './../../Types/PizzaTypes';
import { Pizza } from './../Model/Pizza';
import { PizzaDataBase } from '../Data/PizzaDataBase'
import { Request, Response } from 'express'
import Authenticator from '../Services/Authenticator';



export class PizzaController {

    async createPizzaRequisicao(req: Request, res: Response): Promise<void> {
        try {
            const { name, price, ingredients } = req.body

            const newPizza: inputPizza = {
                name,
                price,
                ingredients
            }

            await new PizzaBusiness().createPizza(newPizza)

            res.status(201).send("Pizza created successfully!")
        } catch (error: any) {
            res.status(500).send(error.message)
        }
    }

    async getAllPizzasReq(req: Request, res: Response) {
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

            const pizzas = await new PizzaDataBase().getAllPizzas()
            res.status(200).send({
                pizzas: pizzas
            })

        } catch (error: any) {
            res.status(400).send({ error: error.message });
        }
    }


}