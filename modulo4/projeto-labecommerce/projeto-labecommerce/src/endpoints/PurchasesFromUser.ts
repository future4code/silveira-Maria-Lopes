import { connection } from "../data/connection"
import express, { Request, Response } from "express"

export const purchasesUsers = async (req: Request, res: Response) => {
    try {
        const resultado = await connection.raw(`
        SELECT * FROM labecommerce_purchases WHERE user_id = "${req.params.user_id}"
      `)
        res.status(200).send(resultado[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
};