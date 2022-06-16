import { connection } from "../data/connection"
import express, { Request, Response } from "express"


export const searchUserByPurchases = async (req: Request, res: Response) => {
    try {
        const resultado = await connection
            .select("labecommerce_users.name", "labecommerce_products.name", "labecommerce_purchases.quantity", "labecommerce_purchases.total_price")
            .from("labecommerce_purchases")
            .join("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
            .join("labecommerce_products", "labecommerce_products.id", "labecommerce_purchases.product_id")
        res.status(200).send({ resultado })
    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}