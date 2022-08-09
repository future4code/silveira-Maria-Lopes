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
            const { name, price, photo, ingredients } = req.body

            const newPizza: inputPizza = {
                name,
                price,
                photo,
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
            const pizzas = await new PizzaDataBase().getAllPizzas()
            res.status(200).send({
                pizzas: pizzas
            })

        } catch (error: any) {
            console.log(error)
            res.status(400).send({ error: error.message });
        }
    }


}