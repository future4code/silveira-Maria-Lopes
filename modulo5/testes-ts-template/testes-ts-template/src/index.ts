import knex from 'knex'
import { config } from 'dotenv'
import { User } from "./types/types"
import app from './app'
import { Request, Response } from 'express'

config()

export const isEven = (integer: number): any => {
    return integer % 2 === 0
}
// deve retornar true se o numero for par e false se ele for impar

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    },
});

// exercício 1

export function performPurchase(user: User, value: number): User | undefined {
    if (user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        }
    }
    return undefined
}

// DESAFIOS
// exercício 3

// fazer um sistema que identifique quais pessoas que estão em uma fila podem entrar em um cassino. 
// a empresa que vai fazer isso quer ter filiais nos EUA e no Brasil, então os 'casino' devem possuir um nome e um lugar
// onde ficam ( EUA ou BRAZIL ). Os usuários devem ser identificados pelo nome, pela nacionalidade ( AMERICAN ou BRAZILIAN ) e a idade.
// se um usuário for entrar em um 'casino' nos Estados Unidos, ele deve ter idade maior do que (idade igual a) 21 anos; se entrar em um
// no Brasil, ele deve ter idade maior do que (idade igual a) 18 anos.
// o retorno da função deve separar os usuários em Brasileiros e Americanos e indicar os nomes dos que tem permissão de entrar e os nomes
// dos que não tem.

// entradas
enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}

interface User2 {
    name: string,
    age: number,
    nacionality: NACIONALITY
}

interface Casino {
    name: string,
    location: LOCATION
}

// saídas
interface ResultItem {
    allowed: string[];
    unallowed: string[]
}

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}

export function verifyAge(casino: Casino, users: User2[]): Result {
    const allowed: User2[] = [];
    const unallowed: User2[] = []

    // para cada usuário dos meus usuários
    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                allowed.push(user)
            } else {
                unallowed.push(user);
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
                allowed.push(user);
            } else {
                unallowed.push(user)
            }
            break;
        }
    }

    return {
        brazilians: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
        },
        americans: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
        },
    }
}
