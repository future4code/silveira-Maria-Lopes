import { performAttack, validateCharacter } from "../src/index"
import { Character } from "../src/types"


describe('testing characters', () => {

    // testes do exercício 2.
    test('check function behavior with a character with empty name', () => {
        const emptyName = validateCharacter({
            name: "",
            life: 2000,
            strength: 200,
            defense: 500
        })

        expect(emptyName).toBe(false)
    })

    test('check the behavior of the function with a character with zero life', () => {
        const emptyLife = validateCharacter({
            name: "Eduarda",
            life: 0,
            strength: 200,
            defense: 500
        })

        expect(emptyLife).toBe(false)
    })

    test('check the behavior of the function with a character with strength equal to zero', () => {
        const emptyLife = validateCharacter({
            name: "Eduarda",
            life: 2000,
            strength: 0,
            defense: 500
        })

        expect(emptyLife).toBe(false)
    })

    test('check the behavior of the role with a character with defense equal to zero', () => {
        const emptyLife = validateCharacter({
            name: "Eduarda",
            life: 2000,
            strength: 200,
            defense: 0
        })

        expect(emptyLife).toBe(false)
    })

    test('check role behavior with a character with health or strength or defense with a negative value', () => {
        const emptyLife = validateCharacter({
            name: "Eduarda",
            life: 2000,
            strength: 200,
            defense: -500
        })

        expect(emptyLife).toBe(false)
    })

    test('check the behavior of the function with a character with the valid information', () => {
        const emptyLife = validateCharacter({
            name: "Eduarda",
            life: 2000,
            strength: 200,
            defense: 500
        })

        expect(emptyLife).toBe(true)
    })
    // como todas as informações estão sendo passadas corretamente, o teste deverá passar.



    // TESTES COM MOCKS
    test('should return a successful attack', () => {
        try {
            const attackerCharacter: Character = ({
                name: "Eduarda",
                life: 2000,
                strength: 700,
                defense: 500
            })

            const defenderCharacter: Character = ({
                name: "Murilo",
                life: 2000,
                strength: 199,
                defense: 499
            })

            const validatorMock = jest.fn(() => {
                return true
            })

            performAttack(attackerCharacter, defenderCharacter, validatorMock)

            expect(defenderCharacter.life).toBeGreaterThan(1800)
            expect(defenderCharacter.life).toBe(201)
            expect(validatorMock).toBeCalled()
        } catch (error) {
            expect(error)
        }
    })

    // test('check the behavior of the function with two characters with mock', () => {
    //     try {
    //         const firtsCharacter: Character = ({
    //             name: "Eduarda",
    //             life: 2000,
    //             strength: 700,
    //             defense: 500
    //         })

    //         const secondCharacter: Character = ({
    //             name: "Murilo",
    //             life: 2000,
    //             strength: 199,
    //             defense: 499
    //         })

    //         const validatorMock = jest.fn(() => {
    //             return false
    //         })

    //         const result = performAttack(firtsCharacter, secondCharacter, validatorMock)
    //         // 'performando' o ataque utilizando o mock para testar.

    //         expect(firtsCharacter.name).toBeGreaterThan(0)
    //     } catch (error) {
    //         expect(error).toContain('Invalid character!')
    //     }
    // })

    test('should perform attack', () => {
        try {
            const attackerCharacter: Character = ({
                name: "Scorpion",
                life: 1500,
                strength: 600,
                defense: 200
            })

            const defenderCharacter: Character = ({
                name: "Kitana",
                life: 1500,
                strength: 800,
                defense: 400
            })

            const validatorMock = jest.fn(() => {
                return true
            })

            performAttack(attackerCharacter, defenderCharacter, validatorMock)

            expect(defenderCharacter.life).toEqual(1300)
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
        } catch (error) {
            expect(error)
        }
    })


    // sobre a função mockada, verifique se ela foi chamada, o número de vezes que foi chamada,
    // o que ela retornou e quantas vezes ela retornou.
    test('Should return invalid character error', () => {
        const attackerCharacter: Character = ({
            name: "Scorpion",
            life: 1500,
            strength: 600,
            defense: 200
        })

        const defenderCharacter: Character = ({
            name: "",
            life: 1500,
            strength: 800,
            defense: 400
        })

        const validatorMock = jest.fn(() => {
            return false
        })

        try {
            performAttack(attackerCharacter, defenderCharacter, validatorMock as any);
        } catch (error: any) {
            expect(error.message).toBe("Invalid character!");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        } finally {
            expect.assertions(4)
            //quantidade de assertions feitas acima.
            // só usar o try e catch quando eu quiser pegar erros lá da função.
        }
    })

    // desafio 6
    test('conferring defender health when attacker fails to attack', () => {
        const attackerCharacter: Character = ({
            name: "Scorpion",
            life: 2000,
            strength: 600,
            defense: 200
        })

        const defenderCharacter: Character = ({
            name: "Kitana",
            life: 1500,
            strength: 800,
            defense: 700
        })

        const validatorMock = jest.fn(() => {
            return true
        })

        performAttack(attackerCharacter, defenderCharacter, validatorMock)

        expect(defenderCharacter.life).toBe(1500)
    })

    test('conferring strength of defender', () => {
        const attackerCharacter: Character = ({
            name: "Scorpion",
            life: 2000,
            strength: 600,
            defense: 200
        })

        const defenderCharacter: Character = ({
            name: "Kitana",
            life: 1500,
            strength: 800,
            defense: 700
        })

        const validatorMock = jest.fn(() => {
            return true
        })

        performAttack(attackerCharacter, defenderCharacter, validatorMock)

        expect(defenderCharacter.strength).toBeGreaterThan(700)
    })

    test('checking attackers name', () => {
        const attackerCharacter: Character = ({
            name: "Scorpion",
            life: 2000,
            strength: 600,
            defense: 200
        })

        const defenderCharacter: Character = ({
            name: "Kitana",
            life: 1500,
            strength: 800,
            defense: 700
        })

        const validatorMock = jest.fn(() => {
            return true
        })

        performAttack(attackerCharacter, defenderCharacter, validatorMock)

        expect(attackerCharacter.name).toBeDefined()
    })

    test('checking attackers life', () => {
        const attackerCharacter: Character = ({
            name: "Scorpion",
            life: 2000,
            strength: 600,
            defense: 200
        })

        const defenderCharacter: Character = ({
            name: "Kitana",
            life: 1500,
            strength: 800,
            defense: 700
        })

        const validatorMock = jest.fn(() => {
            return true
        })

        performAttack(attackerCharacter, defenderCharacter, validatorMock)

        expect(attackerCharacter).toHaveProperty('name')
    })



})