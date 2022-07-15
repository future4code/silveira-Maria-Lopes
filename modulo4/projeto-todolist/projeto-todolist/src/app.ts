import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

// 1- Criar usuário

const createUser = async (
  id: number,
  name: string,
  nickname: string,
  email: string
) => {
  await connection
    .insert({
      id: id,
      name: name,
      nickname: nickname,
      email: email
    })
    .into("Users")
}

app.post('/user', async (req: Request, res: Response) => {
  try {
    const { name, nickname, email } = req.body

    if(!name && !nickname && !email) {
      throw new Error("Please, fill in the fiels!")
    }

    await createUser(
      req.body.id,
      req.body.name,
      req.body.nickname,
      req.body.email
    )
    res.status(200).send({
      message: "User created successfully!"
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
})


// 2- Pegar usuário pelo id

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Users")
      .where('id', req.params.id)
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})


// 3- Editar usuário

app.put("/user/:id", async (req: Request, res: Response) => {
  try {

    const { name, nickname } = req.body

    if(!name || !nickname) {
      throw new Error("Fill in all fields!")
    }

    await connection("Users")
      .update({
        name: req.body.name,
        nickname: req.body.nickname
      })
      .where({ id: req.params.id })
    res.status(200).send("User successfully edited!")
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});


// 4- Criar tarefa

const createAssignment = async (
  id: number,
  title: string,
  description: string,
  status: string,
  limitDate: string,
  creatorUserId: number
) => {
  await connection
    .insert({
      id: id,
      title: title,
      description: description,
      status: status,
      limitDate: limitDate,
      creatorUserId: creatorUserId
    })
    .into("Assignment")
}

app.post('/assignment', async (req: Request, res: Response) => {
  try {
    const { title, description, limitDate, creatorUserId, id, status } = req.body
    let dataAmericana = limitDate.split('/').reverse().join('-');

    if(!title || !description || !limitDate || !creatorUserId || status) {
      throw new Error("Please, fill in the fiels!")
    }

    await createAssignment(
      Date.now()%10000,
      req.body.title,
      req.body.description,
      req.body.status,
      dataAmericana,
      req.body.creatorUserId
    )
    res.status(200).send({
      message: "Assignment created successfully!"
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
})

// 5- Pegar tarefa por ID

app.get("/assignment/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Assignment")
      .where('id', req.params.id)
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

// 6- Pegar todos os usuários 


app.get("/users", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Users")
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})


// 7- Pegar tarefas criadas por um usuário

app.get("/userAssignment", async (req: Request, res: Response) => {
  try {
    const resultado = await connection
      .select("*") 
      .from("Assignment")
      .innerJoin("Users", "Users.id", "Assignment.creatorUserId")
      .where('creatorUserId', Number(req.query.creatorUserId))
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

// 8- Pesquisar usuário

app.get("/searchuser", async (req: Request, res: Response) => {
  try {
    if (!Number(req.query.id)) {
      throw new Error("Please, fill in the field!")
    }
    const resultado = await connection("Users")
      .where('id', Number(req.query.id))
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

// 9- Atribuir um usuário responsável a uma tarefa





// 10- Pegar usuários responsáveis por uma tarefa

app.get("/assignmentresponsible/:id", async (req: Request, res: Response) => {
  try {
    const resultado = await connection
      .select("*") 
      .from("Users")
      .innerJoin("Assignment", "Assignment.creatorUserId", "Users.id")
      .where('id', req.params.id)
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})
//pegar usuarios responsáveis por uma tarefa, entao tenho q acessar o id da tarefa e me retornar o usuario.

// app.get("/assignmentresponsible/:id", async (req: Request, res: Response) => {
//   try {
//     const resultado = await connection
//       .select("title") 
//       .from("Users")
//       .innerJoin("Assignment", "Assignment.creatorUserId", "Users.id")
//       .where('id', Number(req.query.id))
//     res.status(200).send({ resultado })
//     console.log(resultado)
//   } catch (error: any) {
//     res.status(500).send("Unexpected error")
//   }
// })

app.get("/assignmentresponsible", async (req: Request, res: Response) => {
  try {
    const resultado = await connection
      .select("*") 
      .from("Assignment")
      .innerJoin("Users", "Users.id", "Assignment.creatorUserId")
      .where('id', Number(req.query.id))
    res.status(200).send({ resultado })
    console.log(resultado)
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})


// app.get("/assignmentresponsible/:id", async (req: Request, res: Response) => {
//   try {
//     const resultado = await connection
//       .select("*") 
//       .from("Assignment")
//       .innerJoin("Users", "Assignment.creatorUserId", "Assignment.creatorUserId")
//       .where('creatorUserId', Number(req.query.creatorUserId))
//     res.status(200).send({ resultado })
//   } catch (error: any) {
//     res.status(500).send("Unexpected error")
//   }
// })

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app