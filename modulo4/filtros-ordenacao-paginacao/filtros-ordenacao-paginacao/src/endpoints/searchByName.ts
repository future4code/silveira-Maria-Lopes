import { getNames } from "../data/getNames"
import express, { Request, Response } from "express"

export const searchNames = async (req: Request, res: Response) => {
    try {
        const name = req.query.name

        const searchName = await getNames(name as string)
        res.status(200).send({ searchName })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}