export type authenticationData = {
    id: string
}

export type InputUser = {
    id: string,
    email: string,
    name: string,
    password: string
}

export type UserLogin = {
    email: string,
    password: string
}

export type InputPost = {
    id: string,
    photo: string,
    description: string,
    type: string,
    created_at: Date,
    author_id: string
}

export type friends = {
    follower_id: string,
    followed_id: string
}