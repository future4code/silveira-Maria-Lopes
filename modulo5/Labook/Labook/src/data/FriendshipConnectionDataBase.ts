import { BaseDatabase } from "./BaseDataBase";

export class FriendshipConnectionDataBase extends BaseDatabase {
    private static TABLE_NAME = "UserFriendshipConnection"

    async verifyFriendship(follower_id: string, followed_id: string) {
        const result = await FriendshipConnectionDataBase.connection.raw(`
        SELECT *
        FROM UserFriendshipConnection
        WHERE follower_id = "${follower_id}" AND followed_id = "${followed_id}"
        `)
        return result[0]
    }

    public async friendship(followed_id: string, follower_id: string): Promise<any> {
        await BaseDatabase.connection()
            .insert({
                follower_id: follower_id,
                followed_id: followed_id
            })
            .into(FriendshipConnectionDataBase.TABLE_NAME)
    }

    public async unfriendUser(follower_id: string, followed_id: string): Promise<any> {
        await BaseDatabase.connection()
            .delete()
            .from(FriendshipConnectionDataBase.TABLE_NAME)
            .where({ follower_id: follower_id })
            .andWhere({ followed_id: followed_id })
    }

}