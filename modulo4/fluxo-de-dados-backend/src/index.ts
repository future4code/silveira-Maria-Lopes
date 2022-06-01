import express, { Request, Response } from "express";
import cors from "cors";
import { produtos } from "./data"

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

console.log('olá, mundo')

//Exercício 1

app.get('/teste', (request: Request, response: Response) => {
    response.status(200).send("Está funcionando!")
})

//Exercício 2
//Arquivo data.js com um array de produtos criado.

//Exercício 3

app.post('/criarproduto', (request: Request, response: Response) => {
    const id = String(request.body.id)
    const name = String(request.body.name)
    const price = Number(request.body.price)

    type Produtos = {
        id: string,
        name: string,
        price: number
    }

    // nova tarefa: 
    const novoProduto: Produtos = {
        id: Date.now().toString(),
        name: name,
        price: price
    }

    produtos.push(novoProduto)

    response.status(200).send({ produtos })
})

//Exercício 4

app.get('/retornaprodutos', (request: Request, response: Response) => {
    response.status(200).send({ produtos })
})

//Exercício 5

app.put('/produtos/:id', (request: Request, response: Response) => {
    const idProduto = String(request.params.id)

    const editaPreco = produtos.map((produto) => {
        if (produto.id === idProduto) {
            return produto.price = request.body.price
        }
    })

    response.status(201).send({ produtos })
})


//Exercício 6

app.delete('/produtos/:id', (request: Request, response: Response) => {
    const idProduto = String(request.params.id)

    const deleteProduto = produtos.filter((produto) => {
        if (produto.id !== idProduto) {
            return produto
        }
    })

    response.status(201).send({ deleteProduto })
})

//Exercício 7

app.post('/criarproduto2', (request: Request, response: Response) => {
    const id = String(request.body.id)
    const name = String(request.body.name)
    const price = Number(request.body.price)

    type Produtos = {
        id: string,
        name: string,
        price: number
    }

    // nova tarefa: 
    const novoProduto: Produtos = {
        id: Date.now().toString(),
        name: name,
        price: price
    }

    if (name && price) {
        produtos.push(novoProduto)
        response.status(201).send({ produtos })
    } else if (!name && price === 0) {
        response.status(500).send("Erro no servidor")
    }

    if (name !== "string" && price) {
        response.status(400).send("Inseriu number ao invés de string")
    }

    if (price <= 0) {
        response.status(400).send("Preço inválido")
    } else {
        response.status(201).send({ produtos })
    }
    response.status(200).send({ produtos })
})

//Exercício 8

app.put('/produtovalidacao/:id', (request: Request, response: Response) => {
    const idProduto = String(request.params.id)
    const price = Number(request.body.price)

    const editaPreco = produtos.map((produto) => {
        if (produto.id === idProduto) {
            return produto.price = request.body.price
        }
    })

    if (!price) {
        response.status(400).send("Preço não recebido!")
    }

    if (typeof price !== "number") {
        response.status(400).send("Insira um número!")
    }

    if (price <= 0) {
        response.status(400).send("Preço inválido!")
    }

    if (!idProduto) {
        response.status(400).send("Id não recebida!")
    }
    response.status(201).send({ produtos })
})

//Exercício 9

app.delete('/produto/:id', (request: Request, response: Response) => {
    try {
        const idProduto = String(request.params.id)

        const deleteProduto = produtos.filter((produto) => {
            if (produto.id !== idProduto) {
                return produto
            }
        })
        if (!idProduto) {
            response.statusCode = 400
            throw new Error("Id não recebido!")
        }

        if (idProduto === undefined) {
            response.statusCode = 404
            throw new Error("Produto não encontrado!")
        }

        response.status(200).send({ deleteProduto })
    } catch (error: any) {
        if(response.statusCode === 200) {
            response.status(500).end()
        }else {
            response.send(error.message)
        }
    }

})



//DESAFIOS
//Exercício 10

app.get('/retornaproduto', (request: Request, response: Response) => {
    // const name = String(request.query.name)
    const produtoFiltrado: any = []

    const filtrarProduto = produtos.map((produto) => {
        if (request.query.search === produto.name) {
            produtoFiltrado.push(produto)
        }
    })
    response.status(200).send({ produtoFiltrado })
})

//Exercício 11

app.put('/produto/:id', (request: Request, response: Response) => {
    const idProduto = String(request.params.id)
    const name = String(request.body.name)
    const price = Number(request.body.price)

    const editaPreco = produtos.map((produto) => {
        if (produto.id === idProduto) {
            return produto.name = request.body.name
        }
    })

    if (name && price) {
        editaPreco;
    } else if (name || price) {
        editaPreco;
    } else if (!name && typeof price !== "number") {
        response.status(400).send("Insira nome e preço do produto!")
    }

    response.status(201).send({ produtos })
})





