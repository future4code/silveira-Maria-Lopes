import { performPurchase, verifyAge } from "../src"
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

        const result = performPurchase(user, 30)

        expect(result).not.toBeDefined()
    })


    // testes do desafio 3
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

        // expect(result.brazilians.unallowed).toEqual(["Eduarda", 18, NACIONALITY.BRAZILIAN])
        expect(result).toEqual({
            brazilians: {
                allowed: [user[0].name],
                unallowed: []
            },
            americans: {
                allowed: [],
                unallowed: []
            }
        })
        //toEqual pode ser usado com arrays e objetos.
    })
})






