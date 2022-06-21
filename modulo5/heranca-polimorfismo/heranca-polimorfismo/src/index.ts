// EXERCÍCIO 1
// letra a) Não seria possível imprimir o password pois é uma propriedade privada.
// letra b) A mensagem foi impressa somente uma vez no terminal.

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}

const maria = new User("1", "Maria Eduarda", "eduarda@hotmail.com", "duda123")
console.log(maria)

// EXERCÍCIO 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const mariaCustomer = new Customer("1", "eduarda@hotmail.com", "Maria Eduarda", "duda123", "123456789")
console.log(mariaCustomer)
// letra a) A frase "Chamando o construtor da classe Customer" foi impressa no terminal somente uma vez.
// letra b) A frase "Chamando o construtor da classe User" foi impressa no terminal duas vezes, porque a classe Customer
// é filha da classe User.

// EXERCÍCIO 3
maria.getId
maria.getName
maria.getEmail
mariaCustomer.purchaseTotal
mariaCustomer.getCreditCard

// Não seria possível imprimir a senha pois é uma propriedade privada. Para imprimi-la, eu teria que transformá-la
// em uma propriedade pública.

// EXERCÍCIO 4
const customer = new Customer("1", "eduarda@hotmail.com", "Maria Eduarda", "duda123", "123456789")
console.log(customer.introduceYourself())

// introduzi o introduceYourself na classe pai, e chamei o método através da classe filha.

// EXERCÍCIO 5
// Alterei o método criado acima para imprimir o nome personalizado.
const customer2 = new Customer("1", "eduarda@hotmail.com", "Maria Eduarda", "duda123", "123456789")
console.log(customer.introduceYourself())


// EXERCÍCIOS DE POLIMORFISMO

// 1)
type Client = {
    name: string,
    registrationNumber: number,
    consumedEnergy: number,
    calculateBill: any
}

const client: Client = {
    name: "Eduarda",
    registrationNumber: 1,
    consumedEnergy: 100,

    calculateBill: () => {
        return 2;
    }
}
client.name
client.registrationNumber
client.consumedEnergy
client.calculateBill
console.log(client)
// a) consegui imprimir todas pois eram todas públicas.

// 2)
abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }
}

// const place = new Place()
// a) Retorna a mensagem "não é possível criar uma instância de uma classe abstrata."
// b) Esse tipo de classe não pode ser instanciada, apenas herdada. Seria preciso criar uma herança para ela.

// 3) 
class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        // Refere-se ao número de moradores da casa

        cep: string
    ) {
        super(cep);
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}
const newResident = new Residence(1, "360368")
//criando uma nova instância para minha classe Residence.

class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        // Refere-se à quantidade de andares do lugar

        cep: string
    ) {
        super(cep);
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity;
    }
}
const newCommerce = new Commerce(20, "260368")
//criando uma nova instância para minha classe Commerce.

class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        // Refere-se à quantidade de máquinas do local 

        cep: string
    ) {
        super(cep);
    }
    public getMachinesQuantity(): number {
        return this.machinesQuantity;
    }
}
const newIndustry = new Industry(200, "160368")
//criando uma nova instância para minha classe Industry.

// OBSERVAÇÃO: Devido à propriedade do Polimorfismo, uma classe filha de uma classe pai é também do mesmo tipo da pai.
// Ou seja, a Residence, a Commerce e a Industry são do tipo Place.
// Dessa forma, uma instância da Residence também é uma instância da classe Place. Uma instância da Commerce também é da classe Place (o mesmo se aplica para a Industry).
// Isso responde à primeira pergunta: para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.

// Para exemplificar isso, criamos propriedades diferentes bem simples: quantidade de moradores, quantidade de andares e quantidade de máquinas. Só que há uma propriedade que todas elas possuem em comum: o CEP. Isso sugere que criemos uma estrutura para armazenar esse dado: uma classe pai ou uma interface. Qual escolher? Há vários motivos para a nossa escolha, mas aqui vamos explicar apenas um dos que a  justificam.
// As propriedades que uma classe herda de uma interface são sempre públicas. Logo, não temos a liberdade de modificar o acesso delas. No nosso caso, estamos representando lugares, certo? Um lugar é fixo, tem um endereço e um CEP que não mudam. Dessa forma, não vamos precisar modificar esse valor ao longo da nossa aplicação. Então o CEP deveria ser protected ou private para não darmos essa possibilidade.
// Não existe uma regra para escolher entre protected e private, mas deixamos protected só para facilitar o acesso a essa propriedade para as classes filhas, dado que é um dado importante e que talvez precise ser lido por elas. Isso responde à segunda pergunta: Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.

// EXERCÍCIO 4

class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep);
    }

    public getCpf(): string {
        return this.cpf;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}

// a) propriedades name, cpf, etc. Métodos getCpf e calculateBill.

// EXERCÍCIO 5

class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep);
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53;
    }

    public getCnpj(): string {
        return this.cnpj;
    }
}

// a) a semelhança dessa classe com a classe anterior são as propriedades públicas e privadas, por exemplo
// o cpf da classe anterior é privada e o cnpj da classe atual são privadas, pois são métodos que não serão
// acessados fora da classe. E o Super das duas classes, que representam as propriedades da classe pai de cada um. 

// b) sinceramente, não vejo nenhuma diferença. Ambas tem praticamente as mesmas propriedades e métodos.

// EXERCÍCIO 6

class IndustrialClinet extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private insdustryNumber: string, // tanto faz ser string ou number
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep);
    }

    public getIndustryNumber(): string {
        return this.insdustryNumber;
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}

// a) industrialClient deve ser filha da classe Industry.
// b) implementa o client.
// c) somente o getters pois não utilizaremos/editaremos essas informações para nada mais. 