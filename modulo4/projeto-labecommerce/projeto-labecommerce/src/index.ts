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
    total_price: number,
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

const getInfoProduct: any = async (product_id: string) => {
    const resultado = await connection
        .select("id", "name", "price")
        .from("labecommerce_products")
        .where("labecommerce_products.id", product_id)
    return resultado[0]
}

app.post("/purchase", async (req: Request, res: Response) => {
    try {
        const { user_id, product_id, quantity, total_price, id } = req.body
        const resultadoProduct = await getInfoProduct(product_id)
        const price = resultadoProduct.price
        const quantidade = quantity
        const sum = price * quantidade

        await productToUser(
            user_id,
            product_id,
            quantity,
            sum,
            id
        );

        res.status(200).send({ message: "Product assigned to user successfully!" });
    } catch (error: any) {
        res.status(400).send({
            message: error.message,
        });
    }
});

// Exercício 6
// Busca das compras de um usuário.

app.get("/users/:user_id/purchases", async (req: Request, res: Response) => {
    try {
        const resultado = await connection.raw(`
        SELECT * FROM labecommerce_purchases WHERE user_id = "${req.params.user_id}"
      `)
        res.status(200).send(resultado[0])
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

// DESAFIOS
// Exercício 7
// Busca por todos os produtos, ordenados por query params.

app.get("/productsbyorder"), async (req: Request, res: Response): Promise<void> => {
    try {
        const table = "labecommerce_products"
        let name = req.query.order
        let order = req.query.order as string

        const result = await connection(table)
            .where("name", "LIKE", `%${name}%`)
            .orderBy(order)

        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}


const getOrderProducts = async (name: string) => {
    const resultado = await connection.raw(`
      SELECT * FROM labecommerce_products
      where name LIKE "%${name}%" 
      ORDER BY name DESC 
    `)
    return resultado[0]
}

app.get("/orderproducts", async (req: Request, res: Response) => {
    try {
        if (!req.query.search) {
            throw new Error("Please, enter the name!")
        }
        const produtos = await getOrderProducts(req.query.search as string)
        res.status(200).send({ produtos })

    } catch (error: any) {
        res.status(500).send({ message: error.message })
    }
})
// Buscando o produto por nome!

// Exercício 8
// Busca por todos os usuários. Alterando o endpoint de busca por todos os usuários para que
// ele retorne também as compras de cada usuário em uma propriedade purchases.

app.get("/searchuserspurchases", async (req: Request, res: Response) => {
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
})


// WORKBENCH

// SELECT labecommerce_users.name, labecommerce_products.name, labecommerce_purchases.quantity, labecommerce_purchases.total_price AS purchases
// FROM labecommerce_purchases
// JOIN labecommerce_users
// ON labecommerce_purchases.user_id = labecommerce_users.id
// JOIN labecommerce_products
// ON product_id = labecommerce_products.id