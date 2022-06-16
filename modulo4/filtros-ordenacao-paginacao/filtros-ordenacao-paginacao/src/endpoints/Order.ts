import { connection } from "../data/connection"
import express, { Request, Response } from "express"

export const orderUsers = async (req: Request, res: Response): Promise<void> => {
    try {
       const table = "aula49_exercicio"
       const name = req.query.name
       let sort = req.query.sort as string
       let order = req.query.order as string
 
       if (sort !== "name" && sort !== "type") {
          sort = "email"
       }
 
       if (!order) {
          order = "ASC"
       }
 
       const result = await connection(table)
          .where("name", "LIKE", `%${name}%`)
          .orderBy(sort, order)
 
       const resultMap = result.map(toResult)
 
       res.status(200).send( resultMap )
 
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

 const toResult = (input: user) => {
    return {
       id: input.id,
       name: input.name,
       email: input.email,
       type: input.type,
    }
 }