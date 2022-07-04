export type authenticationData = {
    id: string,
    role: string
}

export type User = {
    id: string,
    email: string,
    name: string,
    password: string,
    role: string
}

export type InputUser = {
    email: string,
    name: string,
    password: string,
    role: string
}

export type UserLogin = {
    email: string,
    password: string
}