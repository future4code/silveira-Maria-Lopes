import { connection } from "../data/connection"
import express, { Request, Response } from "express"

const createUser = async (
    name: string,
    email: string,
    password: string
) => {
    await connection
        .insert({
            id: Date.now().toString(),
            name: name,
            email: email,
            password: password
        })
        .into("labecommerce_users");
};

export const cadastroUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body

        if(!name || !email || !password) {
            throw new Error("Could not create user. Please, check the completion of all fields!")
        }
        await createUser(
            name,
            email,
            password
        );

        res.status(200).send({
            message: "Success"
        });

    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
};
