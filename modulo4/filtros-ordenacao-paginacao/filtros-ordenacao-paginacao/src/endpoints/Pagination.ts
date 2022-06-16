import { connection } from "../data/connection"
import express, { Request, Response } from "express"

export const Pagination = async (req: Request, res: Response): Promise<void> => {
    try {
       const table = "aula49_exercicio"
       const name = req.query.name
       let sort = req.query.sort as string
       let order = req.query.order as string
       let page = Number(req.query.page)
       let size = 5
       let offset = size * (page - 1)

       if (page < 1 || isNaN(page)) {
          page = 1
       }
       // verificação para garantir que a minha página padrão seja 1, caso o usuário
       // digitar um valor inválido, ou menor que 1.
 
       const result = await connection(table)
          .where("name", "LIKE", `%${name}%`)
          .orderBy(sort, order)
          .limit(size)
          .offset(offset)
 
       const resultMapOrder = result.map(resultOrder)
 
       if (resultMapOrder.length < 1) {
          throw new Error("User not found!",);
       }
 
       res.status(200).send(result)
 
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }
 
 type user = {
    id: number,
    name: string,
    email: string,
    type: string
 }
 
 const resultOrder = (input: any): user => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       type: input.type,
    }
 }
 