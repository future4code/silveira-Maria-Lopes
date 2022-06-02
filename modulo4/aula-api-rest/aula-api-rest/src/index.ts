import express, { Request, response, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});


type user = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

let users: user[] = [
  {
    id: 1,
    name: "Alice",
    email: "alice@email.com",
    type: UserType.ADMIN,
    age: 12
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@email.com",
    type: UserType.NORMAL,
    age: 36
  },
  {
    id: 3,
    name: "Coragem",
    email: "coragem@email.com",
    type: UserType.NORMAL,
    age: 21
  },
  {
    id: 4,
    name: "Dory",
    email: "dory@email.com",
    type: UserType.NORMAL,
    age: 17
  },
  {
    id: 5,
    name: "Elsa",
    email: "elsa@email.com",
    type: UserType.ADMIN,
    age: 17
  },
  {
    id: 6,
    name: "Fred",
    email: "fred@email.com",
    type: UserType.ADMIN,
    age: 60
  }
]

//Exercício 1

app.get('/users', (request: Request, response: Response) => {
  try {
    if(users) {
      response.status(200).send({ users })
    }   
  } catch (error) {
    response.status(400).send({ message: error })
  }
})

//a) o método get seria utilizado pois estou buscando as informações dos usuários.
//b)a entidade é passada no path, e manipulada pelo '/users'.

//Exercício 2

app.get('/userstype', (request: Request, response: Response) => {
  const typeFiltrada: any = []
  try {
    const filtrarType = users.map((type) => {
      if (request.query.search === type.type) {
        typeFiltrada.push(type)
      }
      if (request.query.search === UserType) {
        throw new Error("Insira um type válido, por favor!")
      }
    })
    response.status(200).send({ typeFiltrada })
  } catch (error: any) {
    response.status(400).send({ message: error.message })
  }
})
//Nesse aqui eu retorno todos os types NORMAL ou todos os types ADMIN.

app.get('/userstype2', (request: Request, response: Response) => {
  let codeError: number = 400

  try {
    const type = request.query.search as string

    const userType = users.find(user => user.type === type)

    if (!userType) {
      codeError = 404
      throw new Error("Insira um type válido!")
    }
    response.status(200).send(userType)
  } catch (error: any) {
    response.status(400).send({ message: error.message })
  }
})
// Nesse aqui eu retorno apenas o primeiro do type NORMAL ou o primeiro do type ADMIN.

//a) utilizei query params, para garantir que o type que for digitado no postman seja
// equivalente à um type existente no meu array de users.

//b) sim. Fiz a tipagem do meu array de users no início do arquivo, para garantir que
// apenas tipos como esse sejam criados, e retornando um erro caso seja uma tipagem inválida.


//Exercício 3

app.get('/userssearch', (request: Request, response: Response) => {
  let codeError: number = 400

  try {
    const name = request.query.name as string
    const searchByName: user | undefined = users.find(user => user.name === name)
    if (!searchByName) {
      codeError = 404
      throw new Error("User not found!")
    }
    response.status(200).send(searchByName)
  } catch (error: any) {
    response.status(codeError).send({ message: error.message })
  }
})

//a) utilizei query params para buscar o nome.
//b) mensagem de erro ok!


//Exercício 4

app.post('/users', (request: Request, response: Response) => {
  let codeError: number = 400

  try {
    const { id, name, email, type, age } = request.body

    const newUser: user = {
      id,
      name,
      email,
      type,
      age
    }

    if (!id || !name || !email || !type || !age) {
      codeError = 404
      throw new Error("Fill in all fields")
    }
    users.push(newUser)
    response.status(201).send({ message: "User created successfully!", users })
  } catch (error: any) {
    response.status(codeError).send({ message: error.message })
  }
})

//a) mudei o método para PUT aqui e no postman e testei, e nada mudou. Meu usuário continua
// sendo criado com sucesso.
//b) não considero adequado porque o PUT serve para modificar ou editar completamente um recurso
// já existente, e não criar um novo. (por que funcionou então?)

//DESAFIOS
//Exercício 5

app.put("/users/:id", (request: Request, response: Response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(request.params.id)

    if (!id) {
      errorCode = 401;
      throw new Error("Please check the params!");
    } else if (isNaN(id)) {
      errorCode = 401;
      throw new Error("Invalid value for id!");
    } else {
      const user = users.findIndex(user => user.id === id)

      users[user].name = "-ALTERADO"

    }

    response.status(201).send(users)
  } catch (error: any) {
    response.status(errorCode).end()
  }
})

//Exercício 6

app.patch("/users/:id", (request: Request, response: Response) => {
  let errorCode: number = 400;
  try {
    const id: number = Number(request.params.id)

    if (!id) {
      errorCode = 401;
      throw new Error("Please check the params!");
    } else if (isNaN(id)) {
      errorCode = 401;
      throw new Error("Invalid value for id!");
    } else {
      const user = users.findIndex(user => user.id === id)

      users[user].name = "-REALTERADO"

    }

    response.status(201).send(users)
  } catch (error: any) {
    response.status(errorCode).end()
  }
})

//Exercício 7

app.delete('/users/:id', (request: Request, response: Response) => {
  let errorCode: number = 400;
  try {
    const id = Number(request.params.id)

    const deleteUser = users.filter((user) => {
      if (user.id !== id) {
        return user
      }
    })
    response.status(200).send({ deleteUser })
  } catch (error: any) {
    response.status(errorCode).send({ message: error })
  }
})

app.delete('/users/:id', (request: Request, response: Response) => {
  let errorCode: number = 400;
  try {
    const id = Number(request.params.id)

    const deleteUser = users.findIndex(user => user.id === id)
    users.splice(deleteUser, 1)
    response.status(200).send({ users })
  } catch (error: any) {
    response.status(errorCode).send({ message: error })
  }
})

//OBSERVAÇÃO: fiz o delete de duas formas porque aprendi a fazer 
// de um jeito diferente e estou um nojo. Passar bem. ¯\_(ツ)_/¯