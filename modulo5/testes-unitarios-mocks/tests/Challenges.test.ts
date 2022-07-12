import { characters } from './../src/types';
import { decreaseCharacterDefense, increaseCharacterStrength, recoverCharacters } from "../src";
import { Character } from "../src/types";


describe('Testing performAttack Challenges', () => {

    test('testing recoverCharacters expecting success', () => {
        const validator = jest.fn(() => {
            return true;
        });

        const result = recoverCharacters(characters, validator as any);
        expect(result[0].life).toBe(1500);
        expect(result[1].life).toBe(1500);
        expect(result[2].life).toBe(1500);
        expect(validator).toHaveBeenCalled();
    })


    test("Testing recoverCharacters expecting a failure (invalid character) with mocked function", () => {
        const validator = jest.fn(() => {
            return false;
        });

        try {
            const character: Character[] = [{
                name: "Mari",
                life: 2000,
                defense: 350,
                strength: 700
            },
            {
                name: "",
                life: 1000,
                defense: 150,
                strength: 300
            }]
            const result = recoverCharacters(character, validator as any);
            expect(character).toHaveProperty('name')
        } catch (error: any) {
            expect(error.message).toBe('Invalid Character!');
        } finally {
            expect.assertions(1);
        }
    })

    // test("Testing character array must have 2 or more characters", () => {
    //     const validator = jest.fn(() => {
    //         return true;
    //     });

    //     try {
    //         const character: Character[] = [{
    //             name: "Mari",
    //             life: 2000,
    //             defense: 350,
    //             strength: 700
    //         }]

    //         const result = recoverCharacters(character, validator as any);
    //         expect(character).toHaveProperty('name')
    //     } catch (error: any) {
    //         expect(error.message).toBe('Character array must have 2 or more characters!');
    //     } finally {
    //         expect.assertions(1);
    //     }
    // })


    // second function
    test("Testing increaseCharacterStrength expecting success", () => {
        const validator = jest.fn(() => {
            return true;
        });

        const character: Character = {
            name: "Mari",
            life: 2000,
            strength: 700,
            defense: 350
        }

        increaseCharacterStrength(character, 800, validator as any)
        expect(character.strength).toBe(800);
        expect(validator).toHaveBeenCalled();
    })

    test("Testing increaseCharacterStrength expecting fail", () => {
        const validator = jest.fn(() => {
            return false;
        });

        const character: Character = {
            name: "",
            life: 2000,
            strength: 700,
            defense: 350
        }

        increaseCharacterStrength(character, 600, validator as any)
        expect(character.strength).toBe(600);
        expect(validator).toHaveBeenCalled();
    })


    //third function
    test("Testing decreaseCharacterDefense expecting success", () => {
        const validator = jest.fn(() => {
            return true;
        });

        const character: Character = {
            name: "Mari",
            life: 2000,
            strength: 700,
            defense: 350
        }

        decreaseCharacterDefense(character, 400, validator as any)
        expect(character.defense).toBe(400);
        expect(validator).toHaveBeenCalled();
    })

    
    test("Testing decreaseCharacterDefense expecting fail", () => {
        const validator = jest.fn(() => {
            return false;
        });

        const character: Character = {
            name: "",
            life: 2000,
            strength: 700,
            defense: 350
        }

        increaseCharacterStrength(character, 300, validator as any)
        expect(character.strength).toBe(300);
        expect(validator).toHaveBeenCalled();
    })
})