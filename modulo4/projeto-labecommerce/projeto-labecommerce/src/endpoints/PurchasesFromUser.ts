import { connection } from "../data/connection"
import express, { Request, Response } from "express"

export const purchasesUsers = async (req: Request, res: Response) => {
    try {
        const user = req.params.user_id

        const resultado = await connection.raw(`
        SELECT * FROM labecommerce_purchases WHERE user_id = "${user}"
      `)
        res.status(200).send(resultado[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
};