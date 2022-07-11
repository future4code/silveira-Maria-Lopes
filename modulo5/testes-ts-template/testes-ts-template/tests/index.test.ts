import { performPurchase, verifyAge } from "../src"
import { Post } from "../src/Requisicoes"
import { Casino, LOCATION, NACIONALITY, User, User2 } from "../src/types/types"



describe('testando o saldo', () => {

    test("Testing balance greater than value", () => {
        const user: User = {
            name: "Eduarda",
            balance: 100
        }
        // atribuindo valores a variável user. Com a tipagem de User,
        // que tem name e balance.
        // foi preciso passar os valores num objeto assim para testá-los em seguida.
        const result = performPurchase(user, 40)
        // colocando a função com os valores dentro da variável result.
        // tentando fazer uma compra com o valor de 40, sendo que o balance
        // do usuário é 100, ou seja, será possível realizar.
        expect(result).toEqual({
            name: "Eduarda",
            balance: 60
        })
        // o saldo precisa ser igual ou maior, 'toEqual'.
    })

    test('Testing balance greater', () => {
        const user: User = {
            name: "Eduarda",
            balance: 30
        }
        // atribuindo valores a variável user. Com a tipagem de User,
        // que tem name e balance.
        // foi preciso passar os valores num objeto assim para testá-los em seguida.
        const result = performPurchase(user, 30)
        // colocando a função com os valores dentro da variável result.
        // tentando fazer uma compra com o valor de 40, sendo que o balance
        // do usuário é 100, ou seja, será possível realizar.
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })

    test('Testing balance', () => {
        const user: User = {
            name: "Eduarda",
            balance: 30
        }

        const result = performPurchase(user, 40)

        expect(result).not.toBeDefined()
    })


    // testes do desafio 3/desafio 4 letra a)
    test('Testando cassino', () => {
        const user: User2[] = [{
            name: 'Eduarda',
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }]

        const casino: Casino = {
            name: 'Casino Monte Carlo',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, user)

        expect(result.brazilians.allowed).toEqual(["Eduarda"])

        expect(result).toEqual({
            brazilians: {
                allowed: ["Eduarda"],
                unallowed: []
            },
            americans: {
                allowed: [],
                unallowed: []
            }
        })
        //toEqual pode ser usado com arrays e objetos.
    })

    // desafio 4, letra b)
    test('teste americano permitido entrar em estabelecimento brasileiro', () => {
        const americanUser: User2[] = [{
            name: 'Alessandra',
            age: 26,
            nacionality: NACIONALITY.AMERICAN
        }]

        const brazilianCasino: Casino = {
            name: 'Casino Monte Carlo',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(brazilianCasino, americanUser)

        expect(result.americans.allowed).toEqual(["Alessandra"])
    })

    // desafio 4, letra c)
    test('dois usuários americanos e dois usuários brasileiros não permitidos no cassino', () => {
        const users: User2[] = [
            {
                name: "Alex",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Murilo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: 'Anne',
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Mary",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: 'Hot Casino',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toEqual(["Alex", "Murilo"])
        expect(result.americans.unallowed).toEqual(["Anne", "Mary"])
        // chamando a parte de unallowed da função para mostrar que eles não podem entrar por conta da idade.
    })

    // desafio 4, letra d)
    test('dois usuários americanos e dois usuários brasileiros permitidos no cassino', () => {
        const users: User2[] = [
            {
                name: "Alex",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Murilo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: 'Anne',
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Mary",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: 'Hot Casino',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toEqual(["Alex", "Murilo"])
        expect(result.americans.allowed).toEqual(["Anne", "Mary"])
        // chamando a parte de unallowed da função para mostrar que eles não podem entrar por conta da idade.
    })

    // desafio 5, letra a)
    test('usuário brasileiro que possa entrar em estabelecimento brasileiro', () => {
        const user: User2[] = [{
            name: 'Dudinha',
            age: 18,
            nacionality: NACIONALITY.BRAZILIAN
        }]

        const casino: Casino = {
            name: 'El Cassino',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, user)

        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        // verificando se o tamanho do array é maior do que zero.
        expect(result.brazilians.allowed.length).toBeLessThan(2);
        // verificando se o tamanho do array é menor do que dois.
    })

    // desafio 5, letra b)
    test('usuário americano que possa entrar em estabelecimento brasileiro', () => {
        const user: User2[] = [{
            name: 'Anne',
            age: 18,
            nacionality: NACIONALITY.AMERICAN
        }]

        const casino: Casino = {
            name: 'El Cassino',
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, user)

        expect(result.americans.unallowed.length).toBeLessThanOrEqual(0);
        expect(result.americans.unallowed.length).toBe(0);
        // verificando o tamanho do array unallowed da propriedade americans tenha tamanho igual a 0.
    })

    // desafio 5, letra c)
    test('dois usuários brasileiros e dois americanos', () => {
        const users: User2[] = [
            {
                name: "Alex",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Murilo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: 'Anne',
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Mary",
                age: 19,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: 'Hot Casino',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed).toContain('Alex')
        expect(result.americans.unallowed).toContain('Anne')
        // verificando se o usuário brasileiro não permitido contem o nome 'Alex',
        // verificando se o usuário americano não permitido contem o nome 'Anne.  
    })

    // desafio 5, letra d)
    test('brasileiros e americanos, tamanho do array', () => {
        const users: User2[] = [
            {
                name: "Alex",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: "Murilo",
                age: 19,
                nacionality: NACIONALITY.BRAZILIAN
            },
            {
                name: 'Anne',
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            },
            {
                name: "Mary",
                age: 21,
                nacionality: NACIONALITY.AMERICAN
            }
        ]

        const casino: Casino = {
            name: 'Hot Casino',
            location: LOCATION.EUA
        }

        const result = verifyAge(casino, users)

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        // verificando que o tamanho do array de usuários brasileiros não permitidos seja maior do que 1.
        expect(result.americans.unallowed.length).toBeLessThan(1)
        // verificando que o tamanho do array de usuários americanos não permitidos seja menor do que 1.
        expect(result.americans.allowed.length).toBe(2)
        // verificando que o tamanho de usuários americanos PERMITIDOS tenha tamanho igual a 2.
    })

    // desafio 6, letra a)
    test('funções assíncronas, criar post', async () => {
        const post = {
            id: '03',
            title: 'Terceiro post!',
            content: 'Hello!'
        }
        // verificando a criação do meu primeiro post.
        const data = new Post()
        await data.createPost(post.id, post.title, post.content)
        // criando uma nova instância de Post e acessando o método createPost.

        const postFromDb = await data.getPostById(post.id)
        // criando uma nova instância de Post e acessando o método getPostById.

        expect(postFromDb).not.toBe(undefined)
        expect(postFromDb).toEqual({
            id: '03',
            title: 'Terceiro post!',
            content: 'Hello!'
        })
        // verificando se o post foi realmente criado no banco de dados.
    })

    // desafio 7
    test('tentar criar um post duplicado para forçar um erro', async () => {
        try {
            const post = {
                id: '04',
                title: 'Quarto post!',
                content: 'Hello!'
            }

            const data = new Post()
            await data.createPost(post.id, post.title, post.content)

            const data2 = new Post()
            await data2.createPost(post.id, post.title, post.content)

        } catch (error: any) {
            expect(error).not.toBe(undefined)
        }
    })

    afterAll(async () => {
        const data = new Post()
        await data.deletePostById("0");
        await data.desconnectDB();
    });
})






