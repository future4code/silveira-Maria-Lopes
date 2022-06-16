import { connection } from "../data/connection"
import express, { Request, Response } from "express"

const createProduct = async (
    name: string,
    price: number,
    image_url: string
) => {
    await connection
        .insert({
            id: Date.now().toString(),
            name: name,
            price: price,
            image_url: image_url
        })
        .into("labecommerce_products");
};

export const criarProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, image_url } = req.body 

        if( !name || !price || !image_url ) {
            throw new Error("Could not register the product. Please, check the completion of all fields!")
        }
        
        await createProduct(
            name,
            price,
            image_url
        );

        res.status(200).send({
            message: "Product registered successfully!"
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
};