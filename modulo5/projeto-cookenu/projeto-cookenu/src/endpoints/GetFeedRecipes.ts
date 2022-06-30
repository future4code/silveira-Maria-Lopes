import { Request, Response } from 'express'
import { BaseDatabase } from '../data/BaseDataBase';
import { UserDataBase } from '../data/UserDataBase'
import Authenticator from '../services/Authenticator'


export default async function getFeedRecipes(req: Request, res: Response): Promise<void> {
    try {
        // aqui, eu acesso o token do usuário por headers (o id está dentro do token também), para então
        // acessar o feed de receitas do usuário que o usuário segue.
        const token = req.headers.authorization as string
        const data = new Authenticator().getData(token)

        const userData = await new UserDataBase().getUserById(data.id)
        // criando uma nova instância de UserDataBase para acessar o método que está dentro dela,
        // getUserById. 
        if (!userData) {
            throw new Error('Make sure you are logged in!')
        }
        // verificando se há o token. se não houver, retorna uma mensagem de erro para o usuário, pois
        // o usuário precisa estar logado para acessar o feed.
        const recipesArray = await new UserDataBase().getFeed(userData.id)
        // criando uma nova instância de UserDataBase para acessar o método getFeed.

        res.status(200).send({
            recipes: recipesArray
        })
        // enviando o recipesArray como resposta.
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
}
