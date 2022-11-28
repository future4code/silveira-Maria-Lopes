export type authenticationData = {
    id: string
}

export type InputTask = {
    id: string,
    title: string,
    status: string
} 

export type InputUser = {
    id: string,
    email: string,
    password: string
}

export type UserLogin = {
    email: string,
    password: string
}