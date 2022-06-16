import { connection } from "../data/connection"
import express, { Request, Response } from "express"

export const searchUsers = async (req: Request, res: Response) => {
    try {
        const resultado = await connection("labecommerce_users")
        res.status(200).send({ resultado })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
};