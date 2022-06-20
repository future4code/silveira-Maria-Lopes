// EXERCÍCIO 1
// letra a) O constructor serve para que possamos ter ações executadas ao criar uma instancia de classe. 
// Além disso, ele pode receber parâmetros que devem ser passados no momento de criar a instância. E quando não
// explicitamos, ele existe como um construtor vazio.

// letra b)
type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
}

const maria = new UserAccount("11174352281", "Maria Eduarda", 23)
// A mensagem "Chamando o construtor da classe User" foi chamada no terminal somente uma vez.

// letra c) Conseguimos ter acesso às propriedades privadas através do método Getters. 
// Por exemplo, para que seja possível acessar o cpf, que é privado, é necessário torná-lo público antes, dessa forma:
// public getCpf(): string {
// 	return this.cpf
// }


// EXERCÍCIO 2

class Transaction2 {
    private description: string;
    private value: number;
    private date: string

    constructor(description: string, value: number, date: string) {
            this.description = description,
            this.value = value,
            this.date = date
    }

    public getDescription() {
        return this.description
    }

    public getValue() {
        return this.value
    }

    public getDate() {
        return this.date
    }

// adicionando instância à instância já criada de user Account
    public juntandoInstancias() {
        UserAccount: mariaTransaction;
    }
}

// nova instância.
const mariaTransaction = new Transaction2("Pix enviado", 200, "20/06/2022")


// EXERCÍCIO 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }
}
// Não criei getters pois quero mantê-las privadas.
