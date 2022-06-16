import { app } from "./app";
import { connection } from "./data/connection";
import express, { Request, Response } from "express"
import { cadastroUser } from "./endpoints/CreateUser"
import { searchUsers } from "./endpoints/SearchUsers"
import { criarProduct } from "./endpoints/CreateProduct"
import { searchProducts } from "./endpoints/SearchProducts"
import { purchaseRecord } from "./endpoints/PurchaseRecord"
import { purchasesUsers } from "./endpoints/PurchasesFromUser"
import { orderProduct } from "./endpoints/ProductsByOrder"
import { searchUserByPurchases } from "./endpoints/SearchUserByPurchases"

// Exercício 1 
// Cadastro de usuário.
app.post("/newuser", cadastroUser)

// Exercício 2
// Busca por todos os usuários.
app.get("/users", searchUsers)

// Exercício 3
// Cadastro de produto.
app.post("/newproduct", criarProduct)

// Exercício 4
// Busca por todos os produtos.
app.get("/products", searchProducts)

// Exercício 5
// Registro de compra.
app.post("/purchase", purchaseRecord)

// Exercício 6
// Busca das compras de um usuário.
app.get("/users/:user_id/purchases", purchasesUsers)

// DESAFIOS
// Exercício 7
// Busca por todos os produtos, ordenados por query params.
app.get("/ordenando", orderProduct)

// Exercício 8
// Busca por todos os usuários. Alterando o endpoint de busca por todos os usuários para que
// ele retorne também as compras de cada usuário em uma propriedade purchases.
app.get("/searchuserspurchases", searchUserByPurchases)


// WORKBENCH
// SELECT labecommerce_users.name, labecommerce_products.name, labecommerce_purchases.quantity, labecommerce_purchases.total_price AS purchases
// FROM labecommerce_purchases
// JOIN labecommerce_users
// ON labecommerce_purchases.user_id = labecommerce_users.id
// JOIN labecommerce_products
// ON product_id = labecommerce_products.id


// EXTRA! DELETAR UM PRODUTO.

const deleteProduct = async (id: number) => {
    await connection("labecommerce_products")
        .where("id", id)
        .delete()
}
// Função para deletar o produto da tabela de produtos pelo id dele.

const deleteProductByIdFromRelation = async (product_id: number) => {
    await connection
        .delete()
        .from("labecommerce_purchases")
        .where("product_id", product_id)
}
// Função para deletar o produto da tabela intermediária pelo product_id.

const selectIdResponsiblesForProduct = async (product_id: number) => {
    const result = await connection
        .select("user_id")
        .from("labecommerce_purchases")
        .where("product_id", product_id)
    return result
}
// Função para deletar o responsável pelo produto da tabela intermediária pelo product_id, pelo user_id.
// Deletar a relação dele com algum usuário para só então removê-lo. 


app.delete("/product/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params

        if (!id) {
            res.statusCode = 400
            throw new Error("field id is required")
        }

        const responsible = await selectIdResponsiblesForProduct(Number(id))

        if (responsible.length > 0) {
            await deleteProductByIdFromRelation(Number(id))
        }

        await deleteProduct(Number(id))

        res.status(200).send("Task deleted with success")
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

// EXTRA! DELETAR UM USUÁRIO.

const deleteUser = async (id: number) => {
    await connection("labecommerce_users")
        .where("id", id)
        .delete()
}
// Função para deletar um usuário da tabela de users pelo id dele.

const deleteUserByIdFromRelation = async (user_id: number) => {
    await connection
        .delete()
        .from("labecommerce_purchases")
        .where("user_id", user_id)
}
// Função para deletar o user da tabela intermediária pelo user_id.

const selectIdResponsiblesForUser = async (user_id: number) => {
    const result = await connection
        .select("product_id")
        .from("labecommerce_purchases")
        .where("user_id", user_id)
    return result
}
// Função para deletar o user da tabela intermediária pelo user_id, buscando pelo id do produto que está relacionado à ele.
// Deletar a relação dele com algum produto para só então removê-lo. 

app.delete("/user/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        //o id do usuário que eu quero deletar por params.

        if (!id) {
            res.statusCode = 400
            throw new Error("field id is required")
        }
        //validação para saber se foi digitado algum número. Caso não, cairá nesse erro pedindo para digitar.

        const responsible = await selectIdResponsiblesForUser(Number(id))
        //variável que vai guardar o id do user_id que está na minha tabela intermediária.

        if (responsible.length > 0) {
            await deleteUserByIdFromRelation(Number(id))
        }
        //se o id do user_id que está na minha tabela intermediária for maior que 0, ou seja, se ele existir,
        //eu vou usar minha função de deletar o usuário por id from relation, ou seja, deletá-lo da tabela intermediária.
        await deleteUser(Number(id))
        //depois de deletar todas as relações que esse usuário tinha com quaisquer produtos, enfim, o deleto.

        res.status(200).send("User deleted with success")
    }
    catch (error: any) {
        if (res.statusCode == 200) {
            res.status(500).send(error.message)
        } else {
            res.status(res.statusCode).send(error.message)
        }
    }
})

//OBSERVAÇÃO: os de delete eu preferi deixar no mesmo arquivo para poder revisá-los com maior facilidade futuramente.