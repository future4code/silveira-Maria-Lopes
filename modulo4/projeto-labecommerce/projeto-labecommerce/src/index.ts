import { app } from "./app";
import { connection } from "./data/connection";
import express, { Request, Response } from "express"

// Exercício 1 
// Cadastro de usuário.

const createUser = async (
    id: number,
    name: string,
    email: string,
    password: string
) => {
    await connection
        .insert({
            id: id,
            name: name,
            email: email,
            password: password
        })
        .into("labecommerce_users");
};

app.post("/newuser", async (req: Request, res: Response) => {
    try {
        await createUser(
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.password
        );

        res.status(200).send({
            message: "Success"
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

// Exercício 2
// Busca por todos os usuários.

app.get("/users", async (req: Request, res: Response) => {
    try {
        const resultado = await connection("labecommerce_users")
        res.status(200).send({ resultado })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// Exercício 3
// Cadastro de produto.

const createProduct = async (
    id: number,
    name: string,
    price: number,
    image_url: string
) => {
    await connection
        .insert({
            id: id,
            name: name,
            price: price,
            image_url: image_url
        })
        .into("labecommerce_products");
};

app.post("/newproduct", async (req: Request, res: Response) => {
    try {
        await createProduct(
            req.body.id,
            req.body.name,
            req.body.price,
            req.body.image_url
        );

        res.status(200).send({
            message: "Product registered successfully!"
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

// Exercício 4
// Busca por todos os produtos.

app.get("/products", async (req: Request, res: Response) => {
    try {
        const resultado = await connection("labecommerce_products")
        res.status(200).send({ resultado })
    } catch (error: any) {
        res.status(500).send(error.message)
    }
})

// Exercício 5
// Registro de compra.

const productToUser = async (
    user_id: number,
    product_id: number,
    quantity: number,
    total_price: any,
    id: number
) => {
    await connection
        .insert({
            user_id: user_id,
            product_id: product_id,
            quantity: quantity,
            total_price: total_price,
            id: id
        })
        .into("labecommerce_purchases");
};

app.post("/purchase", async (req: Request, res: Response) => {
    try {

        const { user_id, product_id, quantity, total_price, id } = req.body
        // let sum: any = "labecommerce_purchases.total_price"
        let sum = total_price

        let getSumOfNumbers = sum.reduce((accumulator: any, number: any) => accumulator + number, 0)
        // let getSumOfNumbers = sum => sum.reduce((accumulator: any, number: any) => accumulator + number, 0)

        await productToUser(
            user_id,
            product_id,
            quantity,
            total_price(getSumOfNumbers),
            id
        );

        res.status(200).send({
            message: "Product assigned to user successfully!"
        });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

// Exercício 6
// Busca das compras de um usuário.

app.get("/searchpurchases/:user_id"), async (req: Request, res: Response) => {
    try {
        const resultado = await connection
            .select("*")
            .from("labecommerce_purchases")
            .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
            .where('id', req.params.id)
        res.status(200).send({ resultado })
    } catch (error) {
    }
}
// - **parâmetro recebido** via `**path params**`:
// - **`user_id`**

// DESAFIOS
// Exercício 7
// Busca por todos os produtos, ordenados por query params.

app.get("/productsorder"), async (req: Request, res: Response): Promise<void> => {
    try {
        const table = "labecommerce_products"
        let name = req.query.order
        let sort = req.query.sort as string
        let order = req.query.order as string

        if (!name) {
            name = "%"
        }
        const result = await connection(table)
            .where("name", "LIKE", `%${name}%`)
            .orderBy(sort, order)

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

// Exercício 8
// Busca por todos os usuários. Alterando o endpoint de busca por todos os usuários para que
// ele retorne também as compras de cada usuário na propriedade purchases, na tabela intermediária.

app.get("/searchuserspurchases"), async (req: Request, res: Response) => {
    try {
        const resultado = await connection
            .select("*")
            .from("labecommerce_purchases")
            .innerJoin("labecommerce_users", "labecommerce_users.id", "labecommerce_purchases.user_id")
            // .on("labecommerce_purchases.user_id" = "labecommerce_users.id")
            // .innerJoin("labecommerce_products")
            // .on("product_id" = "labecommerce_products.id")
            .where('id', req.params.id)
        res.status(200).send({ resultado })
    } catch (error) {
    }
}
// Assim eu deveria ser capaz de juntar a tabela de produtos com a tabela intermediária de compras.

// FICARIA ASSIM NO WORKBENCH?

// SELECT *
// FROM labecommerce_purchases
// JOIN labecommerce_users
// ON labecommerce_purchases.user_id = labecommerce_users.id
// JOIN labecommerce_products
// ON product_id = labecommerce_products.id

// AGORA EU PEGO SÓ A INFORMAÇÃO QUE ME INTERESSA:

// SELECT labecommerce_users.name, labecommerce_products.name, labecommerce_purchases.quantity, labecommerce_purchases.total_price AS purchases
// FROM labecommerce_purchases
// JOIN labecommerce_users
// ON labecommerce_purchases.user_id = labecommerce_users.id
// JOIN labecommerce_products
// ON product_id = labecommerce_products.id