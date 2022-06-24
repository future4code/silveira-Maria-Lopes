import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
});

type Transaction = {
  name: string,
  cpf: string,
  value: number,
  description: string,
  date?: Date,
  addressee?: string,
  addresseeCpf?: number
}

type Account = {
  name: string,
  cpf: string,
  birthDate: Date,
  balance: number,
  statement: Array<Transaction>
}

let users: Account[] = [
  {
    name: "Maria Eduarda",
    birthDate: new Date("1990-01-01"),
    cpf: "176.176.222-22",
    balance: 5000,
    statement: []
  },
  {
    name: "Alessandra",
    birthDate: new Date("1990-01-01"),
    cpf: "111.111.111-11",
    balance: 1000,
    statement: []
  },
  {
    name: "Adernam",
    birthDate: new Date("1990-01-01"),
    cpf: "222.222.222-22",
    balance: 3000,
    statement: [{
      name: "Adernam",
      cpf: "222.222.222-22",
      value: 500,
      date: new Date("1990-01-01"),
      description: "Olá"
  }]
  },
  {
    name: "Alex",
    birthDate: new Date("1990-01-01"),
    cpf: "333.333.333-33",
    balance: 1000,
    statement: []
  },
  {
    name: "Murilo",
    birthDate: new Date("1990-01-01"),
    cpf: "444.444.444-44",
    balance: 1000,
    statement: []
  }
]

app.post("/users/create", (req: Request, res: Response) => {
  let codeError: number = 400

  try {
    const { name, cpf, birthDate } = req.body

    const [day, month, year] = birthDate.split('/')
    const birthFormated: Date = new Date(`${year}-${month}-${day}`)
    const birthDateinMilliseconds = birthFormated.getTime()
    console.log(birthDate)
    console.log(birthDateinMilliseconds)

    const ageInMilisseconds: number = Date.now() - birthDateinMilliseconds
    const age: number = ageInMilisseconds / 1000 / 60 / 60 / 24 / 365

    if (age < 18) {
      res.statusCode = 406
      throw new Error("Age must be over 18 to create an account.")
    }

    const verificaCpf = users.find((conta) => {
      return conta.cpf === cpf
    })

    if (verificaCpf) {
      res.statusCode = 406
      throw new Error("This cpf is already linked to some account!")
    }

    users.push({
      name: name,
      cpf: cpf,
      birthDate: birthDate,
      balance: 0,
      statement: []
    })

    res.status(201).send({ message: "User created successfully!", users })
  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

app.get('/users', (req: Request, res: Response) => {
  try {
    if (!users) {
      res.statusCode = 404
      throw new Error("No accounts found!")
    }
    res.status(200).send({ users })
  } catch (error: any) {
    res.status(400).send({ message: error.message })
  }
})

//DESAFIOS!
//1) foi feita a verificação do cpf no exercício 1.


//2)
app.get('/users/:cpf', (req: Request, res: Response) => {
  let codeError: number = 400

  try {
    const cpf = req.params.cpf
    const search = users.filter((user) => {
      if (user.cpf === cpf) {
        return user
      }
    })

    if (!search) {
      codeError = 401;
      throw new Error("Invalid cpf");
    }

    res.status(200).send(search)

  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

//3)

app.put("/usersbalance", (request: Request, response: Response) => {
  let errorCode: number = 400;

  try {
    const name = request.body.name
    const cpf = request.body.cpf
    const balance = request.body.balance

    const addbalance = users.find((user) => {
      if (user.name === name) {
        return user.balance = user.balance + balance
      }
    })

    if (!addbalance) {
      errorCode = 401;
      throw new Error("name and cpf dont match!");
    }

    response.status(200).send(addbalance)

  } catch (error: any) {
    response.status(errorCode).send({ message: error.message })
  }
})
//fiquei orgulhosa de ter feito essa aqui sozinha em 5 minutos ｡‿｡

//4)

app.put("/usersbalance2", (request: Request, response: Response) => {
  let errorCode: number = 400;

  try {
    const name = request.body.name
    const cpf = request.body.cpf
    const balance = request.body.balance
    const statement = request.body.statement

    const addbalance = users.find((user) => {
      if (user.name === name) {
        return user.statement = statement
      }
    })

    if (!addbalance) {
      errorCode = 401;
      throw new Error("name and cpf dont match!");
    }

    response.status(200).send(addbalance)

  } catch (error: any) {
    response.status(errorCode).send({ message: error.message })
  }
})

//5)

app.post("/userspayment", (request: Request, response: Response) => {
  let errorCode: number = 400;

  try {
    const { name, cpf, balance, statement } = request.body

    const addbalance = users.find((user) => {
      if (user.name === name) {
        return user.statement = statement
      }
    })

    if (statement.date === "") {
      errorCode = 404
      throw new Error("Payment must be made today!")
    }

    if (!addbalance) {
      errorCode = 401;
      throw new Error("name and cpf dont match!");
    }

    response.status(200).send(addbalance)

  } catch (error: any) {
    response.status(errorCode).send({ message: error.message })
  }
})

//6)

app.put("/usersupdatebalance", (request: Request, response: Response): any => {
  let errorCode: number = 400;

  try {
    const { name, cpf, balance, statement } = request.body

    // Você precisa tbm converter a date da conta, da seguinte maneira:
    const convertDate = (date: string): any => {
      const [dia, mes, ano] = date
      const time = new Date(`${ano}-${mes}-${dia}`)
      return time
    }
    // Dito isso para saber se a data já passou você pode fazer:
    const dateCurrente = new Date().getTime()
    dateCurrente > convertDate("20/02/2022")

    const client = users.find(user => user.name === name)

    if (!client) {
      errorCode = 401;
      throw new Error("Please check the fields!");
    }

    let dividas = 0;

    client.statement.forEach((divida) => {
      if (dateCurrente) {
        dividas += divida.value
      }
    })
    client.balance -= dividas

    response.status(200).send(client)

  } catch (error: any) {
    response.status(errorCode).send({ message: error.message })
  }
})
//Esse aqui "só" funciona se eu altero o valor diretamente aqui no código.
//Assim, se alterar aqui e bater lá no postman, vai fazer a subtração certinho.
//Mas colocando só no postman não :(

//7)

app.put("/userspayment2", (request: Request, response: Response) => {
  let errorCode: number = 400;

  try {
    const { value, description, date } = request.body
    const { name, cpf, balance, statement } = request.body

    const newExpense: Transaction = {
      name,
      cpf,
      value,
      description,
      date
    }

    const client = users.find(user => user.name === name)

    if (client === undefined) {
      errorCode = 404;
      throw new Error("User wasn't found")
    }
    if (cpf.length < 14) {
      errorCode = 422;
      throw new Error("Please enter a valid cpf!")
    } else {
      if (date !== undefined) {
        function paymentOk(date: string): number {
          const [day, month, year] = date.split('/')
          const dateFormatted = new Date(`${year}-${month}-${day}`)

          const paymentDateTime = dateFormatted.getTime()
          const today = new Date().getTime()

          const paymentDate = Math.floor((paymentDateTime - today) / (1000 * 60 * 60 * 24 * 365))
          return paymentDate;
        }
        const paymentDate = paymentOk(date)
        if (client.balance - value >= 0) {
          users.push(client)
          client.balance = client.balance - value
          response.status(200).send(client)
        } else if (paymentDate < 0) {
          errorCode = 422;
          throw new Error("Date has expired")
        }
      }
      if (date === undefined && client.balance - value >= 0) {
        users.push(client)
        client.balance = client.balance - value
        response.status(200).send(client)
      } else if (client.balance - value < 0) {
        errorCode = 400;
        throw new Error("You do not have enough balance!")
      }
    }
    response.status(200).send(client)
  } catch (error: any) {
    if (response.statusCode == 200) {
      response.status(500).send(error.message)
    } else {
      response.status(errorCode).send(error.message)
    }
  }
}
)
//Aqui eu não entendo porque não tá funcionando, porque a lógica na minha cabeça faz todo sentido :'(

//8) foi feito junto com a anterior, mesmo endpoint.


//9) 10) 11)

app.put("/clientstransactions", (req: Request, res: Response) => {
  let errorCode: number = 400;
  try {
    const { name, cpf, value, description, addressee, addresseeCpf } = req.body

    const transferPayer: Transaction = {
      name,
      cpf,
      value,
      description,
      addressee,
      addresseeCpf
    }

    const transferReceiver: Transaction = {
      name,
      cpf,
      value,
      description
    }

    if (!name || !cpf || !value || !description || !addressee || !addresseeCpf) {
      errorCode = 422;
      throw new Error("Please, check the fields!")
    } else {
      const payer = users.find((user) => {
        return user.name === name && user.cpf == cpf
      })
      const receiver = users.find((user) => {
        return user.name === addressee && user.cpf === addresseeCpf
      })
      if (payer === undefined) {
        errorCode = 404;
        throw new Error("Payer wasn't found")
      }
      if (receiver === undefined) {
        errorCode = 404;
        throw new Error("Receiver wasn't found")
      }
      else {

        if (payer.balance - value >= 0) {
          payer.statement.push(transferPayer)
          payer.balance = payer.balance - value

          receiver.statement.push(transferReceiver)
          receiver.balance = receiver.balance + value
          res.status(200).send({ Payer: payer, Receiver: receiver })
        } else if (payer.balance - value < 0) {
          errorCode = 400;
          throw new Error("You do not have enough balance!")
        }
      }
    }
  } catch (error: any) {
    if (res.statusCode == 200) {
      res.status(500).send(error.message)
    } else {
      res.status(errorCode).send(error.message)
    }
  }
}) 