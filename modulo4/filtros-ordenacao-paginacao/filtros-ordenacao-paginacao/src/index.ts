import { connection } from "./data/connection"
import { app } from "./app"
import { searchNames } from "../src/endpoints/searchByName"
import { orderUsers } from "../src/endpoints/Order"
import { searchType } from "../src/endpoints/searchByType"
import { Pagination } from "../src/endpoints/Pagination"
import { users } from "../src/endpoints/FilPagOrd"

// Exercício 1
// letra a)
 app.get("/searchbyname", searchNames)

// letra b)
 app.get("/searching/:type", searchType)
 
// Exercício 2
app.get("/order", orderUsers)
 
// Exercício 3
app.get("/pagination", Pagination)

// Exercício 4
app.get("/users", users)