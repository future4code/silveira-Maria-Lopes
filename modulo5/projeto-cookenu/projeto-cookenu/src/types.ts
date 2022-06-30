export type user = {
   id: string,
   name: string,
   email: string
   password: string,
   role: string
}

export type authenticationData = {
   id: string,
   role: string
}

export type recipe = {
   id: string,
   title: string,
   description: string,
   created_at: Date,
   creator_user_id: string
}

