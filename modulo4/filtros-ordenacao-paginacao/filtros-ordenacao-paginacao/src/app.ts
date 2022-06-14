import express, { Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { connection } from "./data/connection"

export const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1
// letra a)

const getNames = async (name: string) => {
   const resultado = await connection.raw(`
     SELECT * FROM aula49_exercicio
     where name LIKE "${name}"
   `)
   return resultado[0]
}

app.get("/searchbyname", async (req: Request, res: Response) => {
   try {
      if (!req.query.name) {
         throw new Error("Please, enter the name!")
      }

      const searchName = await getNames(req.query.name as string)
      res.status(200).send({ searchName })

   } catch (error: any) {
      res.status(500).send({ message: error.message })
   }
})

// letra b)

const getByType = async (type: string) => {
   const resultado = await connection.raw(`
     SELECT * FROM aula49_exercicio
     where type LIKE "${type}"
   `)
   return resultado[0]
}

app.get("/searching/:type", async (req: Request, res: Response) => {
   try {
      if (!req.params.type) {
         throw new Error("Please, enter the type!")
      }

      const searchType = await getByType(req.params.type as string)
      res.status(200).send({ searchType })

   } catch (error: any) {
      res.status(500).send({ message: error.message })
   }
})

// Exercício 2

async function usersOrder(req: Request, res: Response): Promise<void> {
   try {
      const table = "aula49_exercicio"
      const name = req.query.name
      let sort = req.query.sort as string
      let order = req.query.order as string

      if (sort !== "name" && sort !== "type") {
         sort = "email"
      }

      if (!order) {
         order = "ASC"
      }

      const result = await connection(table)
         .where("name", "LIKE", `%{name}%`)
         .orderBy(sort, order)

      const resultMap = result.map(toResult)

      res.status(200).send({ result })

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

const toResult = (input: any) => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
   }
}


// const getUsersOrder = async () => {
//    const resultado = await connection.raw(`
//      SELECT * FROM aula49_exercicio
//      ORDER BY name ASC
//    `)
//    return resultado[0]
// }

// app.get("/usersorder", async (req: Request, res: Response) => {
//    try {
//       // if (!req.query.name) {
//       //    throw new Error("Please, enter the name!")
//       // }

//       const searchName = await getUsersOrder()
//       res.status(200).send({ searchName })

//    } catch (error: any) {
//       res.status(500).send({ message: error.message })
//    }
// })

// Exercício 3

async function Pagination(req: Request, res: Response): Promise<void> {
   try {
      const table = "aula49_exercicio"
      const name = req.query.name
      let sort = req.query.sort as string
      let order = req.query.order as string
      let page = Number(req.query.page)

      if (page < 1 || isNaN(page)) {
         page = 1
      }
      //verificação antes de fazer o calculo do offset.
      let size = 5
      let offset = size * (page - 1)
      // verificação para garantir que a minha página padrão seja 1, caso o usuário
      // digitar um valor inválido, ou menor que 1.

      const result = await connection(table)
         .where("name", "LIKE", `%{name}%`)
         .orderBy(sort, order)
         .limit(5)
         .offset(offset)

      const resultMapOrder = result.map(resultOrder)

      if (resultMapOrder.length < 1) {
         throw new Error("User not found!",);
      }

      res.status(200).send(result)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

type user = {
   id: number,
   name: string,
   email: string,
   type: string
}

const resultOrder = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
   }
}

// Exercício 4

async function Users(req: Request, res: Response): Promise<void> {
   try {
      const table = "aula49_exercicio"
      const name = req.query.name
      let sort = req.query.sort as string
      let order = req.query.order as string
      let page = Number(req.query.page)

      if (page < 1 || isNaN(page)) {
         page = 1
      }
      //verificação antes de fazer o calculo do offset.
      let size = 5
      let offset = size * (page - 1)
      // verificação para garantir que a minha página padrão seja 1, caso o usuário
      // digitar um valor inválido, ou menor que 1.

      if(!name) {
         res.status(200).send("aula49_exercicio.name")
      }

      if (!sort) {
         sort = "name"
      }

      if (!order) {
         order = "DESC"
      }

      const result = await connection(table)
         .where("name", "LIKE", `%{name}%`)
         .orderBy(sort, order)
         .limit(5)
         .offset(offset)

      const resultMapUsers = result.map(resultUsers)

      if (resultMapUsers.length < 1) {
         throw new Error("User not found!",);
      }

      res.status(200).send(result)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
const resultUsers = (input: any): user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
   }
}





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
})