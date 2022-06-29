import { BaseDatabase } from "./BaseDataBase";



export class UserConnectionDataBase extends BaseDatabase {
    static TABLE_NAME = "UserFollowConnection"

    public async followUser(followerId: string, followedId: string): Promise<any> {
        await BaseDatabase.connection()
            .insert({
                follower_id: followerId,
                followed_id: followedId
            })
            .into(UserConnectionDataBase.TABLE_NAME)
        // passando por parâmetro os dois ID's: o do usuário que seguirá, e o do usuário que será seguido.
        // os nomes 'follower_id' e 'followed_id' vem do banco de dados, da tabela intermediária.
    }

    public async unfollowUser(follower_id: string, followed_id: string): Promise<any> {
        await BaseDatabase.connection()
            .delete()
            .from(UserConnectionDataBase.TABLE_NAME)
            .where({ follower_id: follower_id })
            .andWhere({ followed_id: followed_id })
    }

    public async delete(id: string): Promise<any> {
        const result = await BaseDatabase.connection()
            .delete()
            .from(UserConnectionDataBase.TABLE_NAME)
            .where('followed_id', id)
            .orWhere('follower_id', id)
        return result
    }
}

