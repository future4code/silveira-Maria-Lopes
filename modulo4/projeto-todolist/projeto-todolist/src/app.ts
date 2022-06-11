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

    if (!name && !nickname && !email) {
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
      .select("name", "nickname")
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

    if (!name || !nickname) {
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

    if (!title || !description || !limitDate || !creatorUserId || !status) {
      throw new Error("Please, fill in the fiels!")
    }

    await createAssignment(
      Date.now() % 10000,
      req.body.title,
      req.body.description,
      req.body.status,
      dataAmericana,
      req.body.creatorUserId
    )
    res.status(200).send({
      message: "Sucessfully!"
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

const createAssignmentToUser = async (
  tarefa_id: number,
  usuario_id: number
) => {
  await connection
    .insert({
      tarefa_id: tarefa_id,
      usuario_id: usuario_id
    })
    .into("TodoListResponsibleUserTaskRelation");
};

app.post("/assignment/responsible", async (req: Request, res: Response) => {
  try {
    await createAssignmentToUser(
      req.body.tarefa_id,
      req.body.usuario_id
    );

    res.status(200).send({
      message: "Task assigned to user successfully!"
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// 10- Pegar usuários responsáveis por uma tarefa

app.get("/task/:id/responsible", async (req: Request, res: Response) => {
  try {
    const resultado = await connection
      .select("*")
      .from("TodoListResponsibleUserTaskRelation")
      .innerJoin("Users", "Users.id", "TodoListResponsibleUserTaskRelation.usuario_id")
      .where('id', req.params.id)
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

// 11- Pegar tarefa pelo id e os responsáveis por ela 

app.get("/task/:id/responsiblesTask", async (req: Request, res: Response) => {
  try {
    const resultado = await connection
      .select("*")
      .from("TodoListResponsibleUserTaskRelation")
      .innerJoin("Users", "Users.id", "TodoListResponsibleUserTaskRelation.usuario_id")
      .where("TodoListResponsibleUserTaskRelation.tarefa_id", Number(req.params.id))
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

// 12- Atualizar o status da tarefa pelo id

app.put("/taskstatus/:id", async (req: Request, res: Response) => {
  try {
    const { status } = req.body

    if (!status) {
      throw new Error("Please, update status!")
    }

    await connection("Assignment")
      .update({
        status: req.body.status
      })
      .where({ id: req.params.id })
    res.status(200).send("Sucess!")
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// 13- Pegar todas as tarefas por status 

app.get("/tasksearch", async (req: Request, res: Response) => {
  try {
    const { status } = req.query

    if (!status) {
      throw new Error("Please, fill in the fiel!")
    }

    const resultado = await connection("Assignment")
      .where({ status: req.query.status })
    res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send("Unexpected error")
  }
})

// 14- Pegar todas as tarefas atrasadas

app.get("/tasklate", async (req: Request, res: Response) => {
  try {
    const resultado = await connection("Assignment")
      .select("*")
      .whereRaw("LimitDate < curdate()")
      res.status(200).send({ resultado })
  } catch (error: any) {
    res.status(500).send({error})
  }
})

// 15- Remover a tarefa da lista de tarefas de um usuário

// app.delete("/task/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response) => {
//   try {
//     const resultado = await connection("TodoListResponsibleUserTaskRelation").delete()
//       .where({ id: req.params.id })
//     res.status(200).send({ resultado })
//   } catch (error: any) {
//     console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// })


// app.get("/task/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response) => {
//   try {
//     const resultado = await connection
//       .delete("tarefa_id")
//       .where("TodoListResponsibleUserTaskRelation.tarefa_id = TodoListResponsibleUserTaskRelation.usuario_id", Number(req.params.id))
//     res.status(200).send({ resultado })
//   } catch (error: any) {
//     res.status(500).send({error})
//   }
// })


// 16- Atribuir mais de um responsável a uma tarefa

const createAnotherAssignmentToUser = async (
  tarefa_id: number,
  usuario_id: Array<number>
) => {
  await connection
    .insert({
      tarefa_id: tarefa_id,
      usuario_id: usuario_id
    })
    .into("TodoListResponsibleUserTaskRelation");
};

app.post("/assignment/another", async (req: Request, res: Response) => {
  try {
    await createAnotherAssignmentToUser(
      req.body.tarefa_id,
      req.body.usuario_id
    );

    res.status(200).send({
      message: "Task assigned to user successfully!"
    });
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

// 17- Procurar tarefa por termos

const getTasks = async (title: string, description: string) => {
  const resultado = await connection.raw(`
    SELECT * FROM Assignment
    where title LIKE "${title}" OR description LIKE "${description}"
  `)
  return resultado[0]
}

app.get("/buscandotarefa", async (req: Request, res: Response) => {
  try {
    const tasks = await getTasks(req.query.query as string, req.query.query as string)
    res.status(200).send({ tasks })

  } catch (error: any) {
    res.status(500).send({ message: error.message })
  }
})

// 18- Atualizar o status de várias tarefas








const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app