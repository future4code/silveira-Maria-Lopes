import { connection } from "./connection"
import { Request, Response } from "express"
import app from "./app"


// CADASTRAR CLIENTES
app.post("/signup", async (req: Request, res: Response) => {
    try {
        const { nameClient, email, password, gender } = req.body
        // var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (nameClient.length < 3 || nameClient.length === "") {
            throw new Error("Field must be at least 3 characters long")
        }

        await connection("clients")
            .insert({
                id: Date.now().toString(),
                nameClient,
                email,
                password,
                gender
            })
        res.status(201).send(await connection("clients"))
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// BUSCAR CLIENTES
app.get("/clients", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await connection("clients"))
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// CADASTRAR PRATOS DO RESTAURANTE
app.post("/signupfood", async (req: Request, res: Response) => {
    try {
        const { name, ingredients, price } = req.body

        await connection("foods")
            .insert({
                id: Date.now().toString(),
                name,
                ingredients,
                price
            })
        res.status(201).send(await connection("foods"))
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// BUSCAR COMIDAS
app.get("/food", async (req: Request, res: Response) => {
    try {
        res.status(200).send(await connection("foods"))
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// REGISTRO DE COMPRA

app.post("/purchases", async (req: Request, res: Response) => {
    try {
        const { client_id, food_id, quantity } = req.body

        const searchProduct: any = await connection("foods")
            .where("id", food_id)
            .select("price")
            .first()

        const total_price = searchProduct.price * quantity

        await connection("purchases")
            .insert({
                client_id,
                food_id,
                quantity,
                total_price
            })
        res.status(200).send(await connection("purchases"))
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

// RETORNAR UM USUÁRIO ESPECÍFICO E SUAS RESPECTIVAS COMPRAS
app.get("/returnpurchases", async (req: Request, res: Response) => {
    try {
        const result = await connection
            .select("clients.nameClient", "foods.name", "clients.email", "purchases.quantity", "purchases.total_price")
            .from("purchases")
            .join("clients", "clients.id", "purchases.client_id")
            .join("foods", "foods.id", "purchases.food_id")
            res.status(200).send(result)
    } catch (error: any) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})
// Nas linhas 96 e 97: Selecione para mim os seguintes campos da tabela intermediária. 
// Nas linhas 98 e 99: Estou relacionando o id do cliente(da tabela clients) com o id da tabela de junção(purchases),
// e o id da comida com o id da tabela intermediária para poder pegar essas informações corretamente!
