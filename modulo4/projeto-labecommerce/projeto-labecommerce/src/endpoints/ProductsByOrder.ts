import { connection } from "../data/connection"
import express, { Request, Response } from "express"


export const orderProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        let name = req.query.name
        let order = req.query.order as string
        let sort = req.query.sort as string

        if (sort !== "name" && sort !== "id") {
            sort = "name"
        }

        if (order.toUpperCase() !== "ASC" && order.toUpperCase() !== "DESC") {
            order = "DESC"
        }

        const result = await connection("labecommerce_products")
            .where("name", "LIKE", `%${name}%`)
            .orderBy(sort, order)

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}