import { connection } from "../data/connection"
import express, { Request, Response } from "express"

const productToUser = async (
    user_id: number,
    product_id: number,
    quantity: number,
    total_price: number
) => {
    await connection
        .insert({
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price,
            id: Date.now().toString()
        })
        .into("labecommerce_purchases");
};

const getInfoProduct: any = async (product_id: string) => {
    const resultado = await connection
        .select("id", "name", "price")
        .from("labecommerce_products")
        .where("labecommerce_products.id", product_id)
    return resultado[0]
}

export const purchaseRecord = async (req: Request, res: Response) => {
    try {
        const { user_id, product_id, quantity, total_price, id } = req.body
        const resultadoProduct = await getInfoProduct(product_id)
        const price = resultadoProduct.price
        const quantidade = quantity
        const sum = price * quantidade

        if ( !user_id || !product_id || !quantity ) {
            throw new Error("Unable to register purchase. Please, check the completion of all fields!")
        }

        await productToUser(
            user_id,
            product_id,
            quantity,
            sum
        );

        res.status(200).send({ message: "Product assigned to user successfully!" });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
};