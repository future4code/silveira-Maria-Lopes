import { getTypes } from "../data/GetTypes"
import express, { Request, Response } from "express"

export const searchType = async (req: Request, res: Response) => {
    try {
        if (!req.params.type) {
            throw new Error("Please, enter the type!")
        }

        const searchType = await getTypes(req.params.type as string)
        res.status(200).send({ searchType })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
}