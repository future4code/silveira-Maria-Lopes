import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//Exercício 1

app.get('/nome', (request: Request, response: Response) => {
    const primeiraVariavel = "Minha primeira variável no endpoint!"
    response.status(201).send({ message: primeiraVariavel })
})

//Exercício 2

type Usuario = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercício 3

const arrayUsuarios: Usuario[] = [
    { id: 1, name: "Eduarda", phone: 9999 - 9999, email: "eduarda@hotmail.com", website: "www.eduarda.com.br" },
    { id: 2, name: "Adernam", phone: 8888 - 8888, email: "adernam@hotmail.com", website: "www.adernam.com.br" },
    { id: 3, name: "Alex", phone: 7777 - 7777, email: "alex@hotmail.com", website: "www.alex.com.br" }
]

//Exercício 4

app.get('/user', (request: Request, response: Response) => {
    // const primeiraVariavel = "Minha primeira variável no endpoint!"
    response.status(201).send({ message: arrayUsuarios })
})

//Exercício 5

type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//Exercício 6

const arrayPosts: Posts[] = [
    { id: 5, title: "relacionamento abusivo", body: "como identificar e cair fora!", userId: 1 },
    { id: 6, title: "5 bons motivos", body: "para mexer o quadril", userId: 2 },
    { id: 7, title: "conversa franca sobre masturbação", body: "você conhece os benefícios?", userId: 3 }
]

//Acho melhor criar o array de posts fora do array de usuários, porque
//cada um tem sua tipagem própria!

//Exercício 7

app.post('/posts', (request: Request, response: Response) => {
    response.status(201).send({ message: arrayPosts })
})

//Exercício 8

app.post('/posts/:id', (request: Request, response: Response) => {
    const idPessoa = Number(request.params.id)

    const acharId = arrayPosts.find((person) => {
        if (person.userId === idPessoa) {
            return person;
        }
    })
    response.status(201).send({ acharId })
})


//DESAFIOS
//Exercício 9

app.delete("/posts/:id", (request: Request, response: Response) => {
    const postsDeleted = arrayPosts.filter((post) => {
        if (post.id !== Number(request.params.id)) {
            return post
        }
    })
    response.send(postsDeleted)
})

//Exercício 10

app.delete("/user/:id", (request: Request, response: Response) => {
    const userDeleted = arrayUsuarios.filter((user) => {
        if (user.id !== Number(request.params.id)) {
            return user
        }
    })
    response.send(userDeleted)
})



