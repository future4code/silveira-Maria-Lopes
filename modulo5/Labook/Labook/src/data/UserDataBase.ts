import { BaseDatabase } from "./BaseDataBase";

export class UserDataBase extends BaseDatabase {
    private static TABLE_NAME = "labook_users"

    public async createUser(id: string, email: string, name: string, password: string): Promise<void> {
        try {
            await BaseDatabase.connection()
                .insert({
                    id,
                    email,
                    name,
                    password
                })
                .into(UserDataBase.TABLE_NAME)

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async login(email: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ email })
        return result[0]
    }

    public async getUserById(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .select("*")
            .from(UserDataBase.TABLE_NAME)
            .where({ id })
            console.log(result[0])
        return result[0]
    }

    public async getFeed(id: string) {
        const result = await BaseDatabase.connection()
            .select("labook_users.name", "labook_users.email", "labook_posts.photo", "labook_posts.description", "labook_posts.type", "labook_posts.created_at",  "labook_posts.author_id")
            .from("UserFriendshipConnection")
            .innerJoin("labook_users", "labook_users.id", "UserFriendshipConnection.followed_id")
            .innerJoin("labook_posts", "labook_posts.author_id", "UserFriendshipConnection.followed_id")
            .where("UserFriendshipConnection.follower_id", `${id}`)
            .orderBy('created_at', 'asc')

        const arrayPosts = result.map((posts: { created_at: number, type: string }) => {
            return {
                ...posts,
                created_at: Date.now()
            }
        })
        return arrayPosts
        // relacionando tabelas e retornando campos que são necessários para a minha aplicação.
        // um map do result, fazendo uma cópia das receitas e adicionando o campo de created_at já com a data formada
        // com Date.now.
    }

}