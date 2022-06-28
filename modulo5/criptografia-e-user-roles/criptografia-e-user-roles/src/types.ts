export enum USER_ROLES {
   NORMAL = "NORMAL",
   ADMIN = "ADMIN"
}

export type user = {
   id: string
   email: string
   password: string
}

export type authenticationData = {
   id: string,
   role: string
}