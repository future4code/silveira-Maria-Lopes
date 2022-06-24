import { connection } from "../data/connection"
import express, { Request, Response } from "express"

export const users = async (req: Request, res: Response): Promise<void> => {
    try {
        const table = "aula49_exercicio"
        let name = req.query.name
        let sort = req.query.sort as string
        let order = req.query.order as string
        let page = Number(req.query.page)

        if (page < 1 || isNaN(page)) {
            page = 1
        }
        //verificação antes de fazer o calculo do offset.
        let size = 5
        let offset = size * (page - 1)
        // verificação para garantir que a minha página padrão seja 1, caso o usuário
        // digitar um valor inválido, ou menor que 1.

        if (!name) {
            name = "%"
        }

        if (!sort) {
            sort = "name"
        }
        if (!order) {
            order = "DESC"
        }
        if (page < 1 || isNaN(page)) {
            page = 1
         }

        const result = await connection(table)
            .where("name", "LIKE", `%${name}%`)
            .orderBy(sort, order)
            // .limit(size)
            .offset(offset)

        const resultMapUsers = result.map(resultUsers)

        if (resultMapUsers.length < 1) {
            throw new Error("User not found!",);
        }

        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

const resultUsers = (input: any) => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        type: input.type,
    }
}