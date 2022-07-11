// interface para representar o usuário 

export interface User {
    name: string,
    balance: number
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN"
}

export interface User2 {
    name: string,
    age: number,
    nacionality: NACIONALITY
}

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export interface Casino {
    name: string,
    location: LOCATION
}