import { connection } from "./data/connection"
import { app } from "./app"
import { getAddress } from "./endpoints/getAddress"
import { newAddress } from "./endpoints/insertAddress"

// Exercício 1
app.get("/getaddress/:cep", getAddress)

// Exercício 2
// Criar tabela no banco de dados: feito.

// Exercício 3
app.post("/insertaddress/:cep", newAddress)