import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//Exercício 1

app.get("/ping", (req, res) => {
    res.send("Pong! 🏓")
})

//Exercício 2

type Tarefas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Exercício 3

const arrayTarefas: Tarefas[] = [
    { userId: 1, id: 10, title: "Lavar o cabelo", completed: true },
    { userId: 2, id: 20, title: "Arrumar casa", completed: false },
    { userId: 3, id: 30, title: "Dar banho no gato", completed: false },
    { userId: 4, id: 40, title: "Ir para a academia", completed: true },
    { userId: 5, id: 50, title: "Sair", completed: false },
]

//Exercício 4

app.post('/tarefas', (request: Request, response: Response) => {

    const concluidos = arrayTarefas.filter((concluido) => {
        if (concluido.completed === true) {
            return concluido;
        }
    })
    response.status(201).send({ concluidos })
})

//Exercício 5

app.post('/novatarefa', (request: Request, response: Response) => {
    const userId = Number(request.body.userId)
    const id = Number(request.body.id)
    const title = String(request.body.title)
    const completed = Boolean(request.body.completed)

    type Afazeres = {
        userId: number,
        id: number,
        title: string,
        completed: boolean
    }

    // nova tarefa: 
    const novoAfazer: Afazeres = {
        userId: userId,
        id: id,
        title: title,
        completed: completed
    }

    //dando push na nova tarefa
    arrayTarefas.push(novoAfazer)

    response.status(201).send({ arrayTarefas })
})


//Exercício 6

app.put('/tarefas/:id', (request: Request, response: Response) => {
    const idParams = Number(request.params.id)

    const filtrando = arrayTarefas.filter((filtro) => {
        if (filtro.id === idParams) {
            filtro.completed !== filtro.completed
        }
    })

    response.status(201).send({ arrayTarefas })
})


//Exercício 7

app.delete('/tarefas/:id', (request: Request, response: Response) => {
    const idParams = Number(request.params.id)

    const deletandoId = arrayTarefas.filter((deletar) => {
        if(deletar.id !== idParams) {
            return deletar;
        }
    })
    response.status(201).send({ deletandoId })
})

//Exercício 8

app.get('/tarefas/:userId', (request: Request, response: Response) => {
    const userIdParams = Number(request.params.userId)

    const afazeresUsuario = arrayTarefas.filter((afazeres) => {
        if(afazeres.userId === userIdParams) {
            return afazeres;
        };
    })
        const afazeresUsuarios = arrayTarefas.filter((afazeres) => {
            if(afazeres.userId !== userIdParams) {
                return afazeres;
            }
    })
    response.status(201).send({tarefas: {selectedUser: afazeresUsuario, others: afazeresUsuarios} })
})

//Exercício 9
//Documentação.

