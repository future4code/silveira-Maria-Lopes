export interface Character {
    name: string;
    life: number;
    strength: number;
    defense: number;
}
// interface para representar os personagens.

export const characters: Character[] = [
    {
        name: 'Amanda',
        life: 200,
        strength: 500,
        defense: 500
    },
    {
        name: 'Jana',
        life: 100,
        strength: 400,
        defense: 400
    },
    {
        name: 'Alex',
        life: 500,
        strength: 800,
        defense: 800
    }
]